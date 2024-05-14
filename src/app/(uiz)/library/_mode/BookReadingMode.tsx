'use client'

import SITE_PATH from '@/app/site-path'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useAchieveLevelBooks } from '@/client/store/achieve/level-books/selector'
import { useAchieveLevelPoint } from '@/client/store/achieve/level-point/selector'
import { useLibraryEbPbFilter } from '@/client/store/library/filter/selector'
import {
  useFetchLibraryHomeBooks,
  useFetchLibraryHomeChangeBookType,
  useFetchLibraryHomeChangeBookTypeAndLevel,
  useFetchLibraryHomeChangeLevel,
} from '@/client/store/library/home/hook'
import { useLibraryHome } from '@/client/store/library/home/selector'
import { useLibrarySeriesAction } from '@/client/store/library/series/selector'
import { useLibraryThemeAction } from '@/client/store/library/theme/selector'
import { useLibraryTodo } from '@/client/store/library/todos/selector'
import { SearchSeriesCategory } from '@/repository/client/object/search-series-category'
import { SearchThemeCategory } from '@/repository/client/object/search-theme-category'
import PaginationBar from '@/ui/common/PaginationBar'
import TabNavBar from '@/ui/common/TabNavBar'
import { StudyHomeBookList } from '@/ui/modules/library-explore-book-list/StudyHomeBookList'
import LevelSelector from '@/ui/modules/library-explore-level-selector/level-selector'
import { LevelUpStatus } from '@/ui/modules/library-explore-level-up-status/level-up-status'
import SeriesListView from '@/ui/modules/library-explore-series-list/SeriesListView'
import ThemeListView from '@/ui/modules/library-explore-theme-list/ThemeListView'
import LatestTodoListView from '@/ui/modules/library-explore-todo-list/LatestTodoListView'
import { LibraryFilterOption } from '@/ui/modules/library-set-fliter/LibrarySearchFilter'
import { SetStudyModeModal } from '../../_header/SetStudyMode'

const BookReadingMode = () => {
  const [viewLevelSelector, _viewLevelSelector] = useState(false)

  const { level, bookType: propBookType } = useLibraryHome()
  const bookType = propBookType === 'EB' ? 'EB' : 'PB'
  const { option: epbOption, payload: books } = useLibraryHome().EBPB
  const { fetch: updateBookList } = useFetchLibraryHomeBooks()
  const levelBooks = useAchieveLevelBooks().payload
  const levelPoints = useAchieveLevelPoint().payload

  let pointProgress = 0
  const currentLevelPoint = levelPoints.filter(
    (item) => item.levelName === level,
  )
  if (currentLevelPoint && currentLevelPoint.length === 1) {
    const point = currentLevelPoint[0]
    if (point.remainingRgPoint > 0) {
      pointProgress = Number(
        ((point.myRgPoint / point.requiredRgPoint) * 100).toFixed(2),
      )
    } else {
      pointProgress = 100
    }
  }

  const { payload: todos } = useLibraryTodo()

  const { fetch: updateBookType, loading: isUpdateBookTypeLoading } =
    useFetchLibraryHomeChangeBookType()
  const { fetch: updateBookLevel, loading: isUpdateBookLevelLoading } =
    useFetchLibraryHomeChangeLevel()
  const {
    fetch: updateBookTypeAndLevel,
    loading: isUpdateBookTypeAndLevelLoading,
  } = useFetchLibraryHomeChangeBookTypeAndLevel()

  let selectedNavBookType = 0
  const uiBookTypeList: string[] = []
  if (bookType === 'EB') {
    uiBookTypeList.push('eBook')
    if (level !== 'KA' && level !== 'KB') {
      uiBookTypeList.push('pBookQuiz')
    }
  } else if (bookType === 'PB') {
    if (level !== '6C') {
      selectedNavBookType = 1
      uiBookTypeList.push('eBook')
    }
    uiBookTypeList.push('pBookQuiz')
  }
  const onSelectNavBookType = (index: number, label: string) => {
    if (label === 'eBook') {
      updateBookType({ bookType: 'EB' })
    } else if (label === 'pBookQuiz') {
      updateBookType({ bookType: 'PB' })
    }
  }

  let bookCount = 0
  let totalBookCount = 0
  if (!isUpdateBookTypeLoading) {
    if (bookType === 'EB') {
      const item = levelBooks.EB.filter((item) => item.levelName === level)
      if (item.length === 1) {
        bookCount = item[0].completedBooks
      }
    } else if (bookType === 'PB') {
      const item = levelBooks.PB.filter((item) => item.levelName === level)
      if (item.length === 1) {
        bookCount = item[0].completedBooks
      }
    }
    totalBookCount = books.page.totalRecords
  }
  const ebOption = useLibraryEbPbFilter('EB')
  const pbOption = useLibraryEbPbFilter('PB')
  const filter = bookType === 'EB' ? ebOption : pbOption

  const bookFilter = [
    {
      group: 'status',
      title: '학습 상태',
      option: [
        { id: 'All', label: '모든 학습', enabled: filter.status === 'All' },
        {
          id: 'Before',
          label: '미완료 학습',
          enabled: filter.status === 'Before',
        },
        {
          id: 'Complete',
          label: '완료한 학습',
          enabled: filter.status === 'Complete',
        },
      ],
    },
    // {
    //   group: 'd2',
    //   title: '부가 설정',
    //   option: [
    //     { id: '11', label: '설정 안함', enabled: false },
    //     { id: '21', label: '학습 1회차를 Full모드로 완료함', enabled: false },
    //     { id: '31', label: '학습 1회차를 Easy모드로 완료함', enabled: false },
    //   ],
    // },
    {
      group: 'sort',
      title: '정렬 방법',
      option: [
        { id: 'Round', label: '기본 정렬', enabled: filter.sort === 'Round' },
        {
          id: 'Preference',
          label: '선호도순',
          enabled: filter.sort === 'Preference',
        },
        {
          id: 'ReadCount',
          label: '인기순',
          enabled: filter.sort === 'ReadCount',
        },
        {
          id: 'RegistDate',
          label: '업데이트순',
          enabled: filter.sort === 'RegistDate',
        },
        {
          id: 'RgPoint',
          label: '포인트순',
          enabled: filter.sort === 'RgPoint',
        },
      ],
    },
    {
      group: 'genre',
      title: '장르별',
      option: [
        { id: 'All', label: '모든 장르', enabled: filter.genre === 'All' },
        {
          id: 'Fiction',
          label: 'Fiction',
          enabled: filter.genre === 'Fiction',
        },
        {
          id: 'Nonfiction',
          label: 'Non-Fiction',
          enabled: filter.genre === 'Nonfiction',
        },
      ],
    },
  ]

  const onFilterChanged = (filterOption: LibraryFilterOption[]) => {
    const findOptionId = (group: LibraryFilterOption) => {
      let value: string | undefined = undefined
      const option = group.option.filter((opt) => opt.enabled)
      if (option.length > 0) {
        value = option[0].id
      }
      return value
    }
    let sort: string | undefined = undefined
    let genre: string | undefined = undefined
    let status: string | undefined = undefined
    filterOption.forEach((group) => {
      if (group.group === 'status') {
        status = findOptionId(group)
      } else if (group.group === 'genre') {
        genre = findOptionId(group)
      } else if (group.group === 'sort') {
        sort = findOptionId(group)
      }
    })
    updateBookList({ page: 1, sort, genre, status })
  }

  const currentPage = books.page.page
  const maxPage = books.page.totalPages
  const onPageClick = (page: number) => {
    updateBookList({ page })
  }

  const router = useRouter()

  // Series
  const { setSeriesSearch } = useLibrarySeriesAction()
  const series = useLibraryHome().series.payload
  const seriesClick = (series: SearchSeriesCategory) => {
    setSeriesSearch({
      bookType,
      level,
      image: series.imagePath,
      title: series.name,
      page: 1,
    })
    router.push(SITE_PATH.LIBRARY.SERIES)
  }

  // Theme
  const { setThemeSearch } = useLibraryThemeAction()
  const themes = useLibraryHome().theme.payload
  const themeClick = (theme: SearchThemeCategory) => {
    setThemeSearch({
      bookType,
      level,
      image: theme.imagePath,
      title: theme.name,
      keyword: theme.code,
      page: 1,
    })
    router.push(SITE_PATH.LIBRARY.THEME)
  }

  const [isShowStudyModal, setShowStudyModal] = useState(false)

  return (
    <>
      {todos.count > 0 && <LatestTodoListView todos={todos} />}
      {viewLevelSelector && (
        <LevelSelector
          _viewLevelSelector={_viewLevelSelector}
          bookType={bookType}
          level={level}
          isChangeBookType={true}
          ebLevelList={levelBooks.EB}
          pbLevelList={levelBooks.PB}
          onLevelClick={(params) => {
            if (bookType !== params.bookType) {
              updateBookTypeAndLevel({
                bookType: params.bookType,
                level: params.level,
              })
            } else if (level !== params.level) {
              updateBookLevel({ level: params.level })
            }
            _viewLevelSelector(false)
          }}
        />
      )}
      <LevelUpStatus
        studyLevel={level}
        progress={`${pointProgress}%`}
        onClick={() => _viewLevelSelector(true)}
        onClickStudyMode={() => setShowStudyModal(true)}
      />
      <TabNavBar
        items={uiBookTypeList.map((name, i) => {
          return {
            label: name,
            active: i === selectedNavBookType,
          }
        })}
        onItemClick={onSelectNavBookType}
      />
      <StudyHomeBookList
        books={books}
        completeCount={bookCount}
        totalCount={totalBookCount}
        filterOption={bookFilter}
        onChangeFilterOption={onFilterChanged}
      />
      <PaginationBar
        page={currentPage}
        maxPage={maxPage}
        onPageClick={onPageClick}
      />
      {series.length !== 0 && (
        <SeriesListView series={series} onSeriesClick={seriesClick} />
      )}
      <ThemeListView themes={themes} onThemeClick={themeClick} />
      {isShowStudyModal && (
        <SetStudyModeModal onCloseClick={() => setShowStudyModal(false)} />
      )}
    </>
  )
}
export default BookReadingMode
