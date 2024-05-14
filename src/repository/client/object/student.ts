import RenewType from '@/util/string-utils'
export interface Student {
  studentId: string
  name: string
  nameEng: string
  loginId: string
  levelTest: string
  revisionCount: number
  courseCode: string
  courseName: string
  schoolId: string
  schoolName: string
  gradeCode: string
  gradeName: string
  studentCellPhone: string
  studentEmail: string
  parentCellPhone: string
  parentEmail: string
  parentName: string
  telephone: string
  postcode: string
  address: string
  detailAddress: string
  memo: string
  photoYn: boolean
  photoFilename1: string
  photoFilename2: string
  attendSmsYn: boolean
  weeklySmsYn: boolean
  monthlySmsYn: boolean
  studySetupYn: boolean
  levelCode: string
  levelName: string
  brCount: number
  rgPoint: number
  changePasswordYn: boolean
  personalInfoDate: string
  passwordCellPhone: string
  passwordQuestion: string
  passwordAnswer: string
  registDate: string
  registStaffId: string
  registStaffName: string
  modifyDate: string
  modifyStaffId: string
  modifyStaffName: string
  studyEndDate: string
  studyEndDay: number
  messageCount: number
  levelTestYn: boolean
  levelHistory: string
  nextRequestMonth: string
  nonPaymentYn: boolean
  remainingRgPoint: number
  classGroupId: string
  classId: string
  className: string
  adjustStatus: string
  adjustCnt: number
  remainningDays: number
  lDays: number
  overseas: string
  experienceClass: string
  needGroupClassYn: boolean
  emailReceiveYN: boolean
  smsReceiveYN: boolean
  smsStudyReportYn: boolean
  smsEventInfomationYn: boolean
  viewStep3Hint: boolean
  viewStep2Skip: boolean
  libraryFindSortName: string
  libraryStatusName: string
  birthYear: number
  residenceCityCode: string
  residenceCityName: string
  residenceDistrictCode: string
  residenceDistrictName: string
  easyLoginYn: boolean
  libraryGenreName: string
  startScreen: string
  libraryCourseName: string
  eBKListenRepeat: boolean
  eB1ListenRepeat: boolean
  readingUnitId: string
  studyReadingUnitId: string
  libraryPBStatusName: string
  libraryPBFindSortName: string
  libraryPBGenreName: string
  libraryLCStatusName: string
  libraryLCFindSortName: string
  libraryLCGenreName: string
  libraryWRStatusName: string
  libraryWRFindSortName: string
  libraryWRGenreName: string
  levelMasterYn: boolean
  viewEventDaysProgressYn: boolean
  studentNo: number
  extensionDiscountYn: boolean
  familyDiscountYn: boolean
}
export function makeStudent(json?: any): Student {
  return {
    studentId: RenewType.renewString(json?.StudentId),
    name: RenewType.renewString(json?.Name),
    nameEng: RenewType.renewString(json?.NameEng),
    loginId: RenewType.renewString(json?.LoginId),
    levelTest: RenewType.renewString(json?.LevelTest),
    revisionCount: RenewType.renewNumber(json?.RevisionCount),
    courseCode: RenewType.renewString(json?.CourseCode),
    courseName: RenewType.renewString(json?.CourseName),
    schoolId: RenewType.renewString(json?.SchoolId),
    schoolName: RenewType.renewString(json?.SchoolName),
    gradeCode: RenewType.renewString(json?.GradeCode),
    gradeName: RenewType.renewString(json?.GradeName),
    studentCellPhone: RenewType.renewString(json?.StudentCellPhone),
    studentEmail: RenewType.renewString(json?.StudentEmail),
    parentCellPhone: RenewType.renewString(json?.ParentCellPhone),
    parentEmail: RenewType.renewString(json?.ParentEmail),
    parentName: RenewType.renewString(json?.ParentName),
    telephone: RenewType.renewString(json?.Telephone),
    postcode: RenewType.renewString(json?.Postcode),
    address: RenewType.renewString(json?.Address),
    detailAddress: RenewType.renewString(json?.DetailAddress),
    memo: RenewType.renewString(json?.Memo),
    photoYn: RenewType.renewBoolean(json?.PhotoYn),
    photoFilename1: RenewType.renewString(json?.PhotoFilename1),
    photoFilename2: RenewType.renewString(json?.PhotoFilename2),
    attendSmsYn: RenewType.renewBoolean(json?.AttendSmsYn),
    weeklySmsYn: RenewType.renewBoolean(json?.WeeklySmsYn),
    monthlySmsYn: RenewType.renewBoolean(json?.MonthlySmsYn),
    studySetupYn: RenewType.renewBoolean(json?.StudySetupYn),
    levelCode: RenewType.renewString(json?.LevelCode),
    levelName: RenewType.renewString(json?.LevelName),
    brCount: RenewType.renewNumber(json?.BrCount),
    rgPoint: RenewType.renewNumber(json?.RgPoint),
    changePasswordYn: RenewType.renewBoolean(json?.ChangePasswordYn),
    personalInfoDate: RenewType.renewString(json?.PersonalInfoDate),
    passwordCellPhone: RenewType.renewString(json?.PasswordCellPhone),
    passwordQuestion: RenewType.renewString(json?.PasswordQuestion),
    passwordAnswer: RenewType.renewString(json?.PasswordAnswer),
    registDate: RenewType.renewString(json?.RegistDate),
    registStaffId: RenewType.renewString(json?.RegistStaffId),
    registStaffName: RenewType.renewString(json?.RegistStaffName),
    modifyDate: RenewType.renewString(json?.ModifyDate),
    modifyStaffId: RenewType.renewString(json?.ModifyStaffId),
    modifyStaffName: RenewType.renewString(json?.ModifyStaffName),
    studyEndDate: RenewType.renewString(json?.StudyEndDate),
    studyEndDay: RenewType.renewNumber(json?.StudyEndDay),
    messageCount: RenewType.renewNumber(json?.MessageCount),
    levelTestYn: RenewType.renewBoolean(json?.LevelTestYn),
    levelHistory: RenewType.renewString(json?.LevelHistory),
    nextRequestMonth: RenewType.renewString(json?.NextRequestMonth),
    nonPaymentYn: RenewType.renewBoolean(json?.NonPaymentYn),
    remainingRgPoint: RenewType.renewNumber(json?.RemainingRgPoint),
    classGroupId: RenewType.renewString(json?.ClassGroupId),
    classId: RenewType.renewString(json?.ClassId),
    className: RenewType.renewString(json?.ClassName),
    adjustStatus: RenewType.renewString(json?.AdjustStatus),
    adjustCnt: RenewType.renewNumber(json?.AdjustCnt),
    remainningDays: RenewType.renewNumber(json?.RemainningDays),
    lDays: RenewType.renewNumber(json?.LDays),
    overseas: RenewType.renewString(json?.Overseas),
    experienceClass: RenewType.renewString(json?.ExperienceClass),
    needGroupClassYn: RenewType.renewBoolean(json?.NeedGroupClassYn),
    emailReceiveYN: RenewType.renewBoolean(json?.EmailReceiveYN),
    smsReceiveYN: RenewType.renewBoolean(json?.SmsReceiveYN),
    smsStudyReportYn: RenewType.renewBoolean(json?.SmsStudyReportYn),
    smsEventInfomationYn: RenewType.renewBoolean(json?.SmsEventInfomationYn),
    viewStep3Hint: RenewType.renewBoolean(json?.ViewStep3Hint),
    viewStep2Skip: RenewType.renewBoolean(json?.ViewStep2Skip),
    libraryFindSortName: RenewType.renewString(json?.LibraryFindSortName),
    libraryStatusName: RenewType.renewString(json?.LibraryStatusName),
    birthYear: RenewType.renewNumber(json?.BirthYear),
    residenceCityCode: RenewType.renewString(json?.ResidenceCityCode),
    residenceCityName: RenewType.renewString(json?.ResidenceCityName),
    residenceDistrictCode: RenewType.renewString(json?.ResidenceDistrictCode),
    residenceDistrictName: RenewType.renewString(json?.ResidenceDistrictName),
    easyLoginYn: RenewType.renewBoolean(json?.EasyLoginYn),
    libraryGenreName: RenewType.renewString(json?.LibraryGenreName),
    startScreen: RenewType.renewString(json?.StartScreen),
    libraryCourseName: RenewType.renewString(json?.LibraryCourseName),
    eBKListenRepeat: RenewType.renewBoolean(json?.EBKListenRepeat),
    eB1ListenRepeat: RenewType.renewBoolean(json?.EB1ListenRepeat),
    readingUnitId: RenewType.renewString(json?.ReadingUnitId),
    studyReadingUnitId: RenewType.renewString(json?.StudyReadingUnitId),
    libraryPBStatusName: RenewType.renewString(json?.LibraryPBStatusName),
    libraryPBFindSortName: RenewType.renewString(json?.LibraryPBFindSortName),
    libraryPBGenreName: RenewType.renewString(json?.LibraryPBGenreName),
    libraryLCStatusName: RenewType.renewString(json?.LibraryLCStatusName),
    libraryLCFindSortName: RenewType.renewString(json?.LibraryLCFindSortName),
    libraryLCGenreName: RenewType.renewString(json?.LibraryLCGenreName),
    libraryWRStatusName: RenewType.renewString(json?.LibraryWRStatusName),
    libraryWRFindSortName: RenewType.renewString(json?.LibraryWRFindSortName),
    libraryWRGenreName: RenewType.renewString(json?.LibraryWRGenreName),
    levelMasterYn: RenewType.renewBoolean(json?.LevelMasterYn),
    viewEventDaysProgressYn: RenewType.renewBoolean(
      json?.ViewEventDaysProgressYn
    ),
    studentNo: RenewType.renewNumber(json?.StudentNo),
    extensionDiscountYn: RenewType.renewBoolean(json?.ExtensionDiscountYn),
    familyDiscountYn: RenewType.renewBoolean(json?.FamilyDiscountYn),
  }
}
