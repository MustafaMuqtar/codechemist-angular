
export interface IPostCourse{
  title: string
  image: File
  description: string
}

export interface IPostSubject {
  title: string
  courseId: string
}
export interface IPostLesson {
  title: string
  lessonVideo: File
  subjetId: number
}
export interface IPostExercise {
  title: string
  pdf: File
  lessonId: number
}

