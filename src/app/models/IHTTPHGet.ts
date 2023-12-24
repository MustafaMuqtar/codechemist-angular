export interface IGetCourse {
  id: number
  title: string
  image: string
  description: string
  courseSubjectLessons: [
    {
      id: number
      title: string
      courseLessonVMs: [
        {
          id: number
          title: string
          lessonVideo: string
          subjectsExercises: {
            id: number
            title: string
            pdf: string
          }
        }

      ]
    }
  ]
}
