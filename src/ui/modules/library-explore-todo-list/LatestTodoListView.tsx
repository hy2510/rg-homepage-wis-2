import { useState } from 'react'
import { TodosResponse } from '@/repository/client/library/todo/todo'
import { BookCover } from '../library-book-cover/book-cover'
import { ExpTodoList } from './todo-list'

export default function LatestTodoListView({
  todos,
  isLabelRgPoint,
}: {
  todos: TodosResponse
  isLabelRgPoint?: boolean
}) {
  const todoData = todos.todo.filter((_, i) => i < 5)

  const [bookInfo, setBookInfo] = useState<
    | {
        studyId: string
        studentHistoryId: string
        levelRoundId: string
        surfaceImagePath: string
        title: string
        author: string
      }
    | undefined
  >(undefined)

  return (
    <>
      <ExpTodoList>
        {todoData.map((book, i) => {
          // const earnPoint = isLabelRgPoint ? book.bookPoint : undefined
          // const bookCode = isLabelRgPoint ? undefined : book.levelName
          const earnPoint = book.bookPoint
          const bookCode = book.levelName
          return (
            <BookCover
              key={`book-cover-${i}-${book.surfaceImagePath}`}
              target={`todo`}
              bookImgSrc={book.surfaceImagePath}
              bookCode={bookCode}
              // earnPoint={earnPoint}
              title={book.title}
              author={book.author}
              isBookInfo={bookInfo && bookInfo.studyId === book.studyId}
              isMovieBook={!!book.animationPath}
              onClickBookDetail={() => {
                setBookInfo(
                  bookInfo
                    ? undefined
                    : {
                        levelRoundId: book.levelRoundId,
                        studyId: book.studyId,
                        studentHistoryId: book.studentHistoryId,
                        surfaceImagePath: book.surfaceImagePath,
                        title: book.title,
                        author: book.author,
                      },
                )
              }}
              levelRoundId={book.levelRoundId}
              studyId={book.studyId}
              studentHistoryId={book.studentHistoryId}
            />
          )
        })}
      </ExpTodoList>
      {/* {bookInfo && (
        <BookInfoModal
          target="todo"
          bookImgSrc={bookInfo.surfaceImagePath}
          title={bookInfo.title}
          author={bookInfo.author}
          levelRoundId={bookInfo.levelRoundId}
          studentHistoryId={bookInfo.studentHistoryId}
          onClickDelete={() => setBookInfo(undefined)}
        />
      )} */}
    </>
  )
}
