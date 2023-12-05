export interface IGetTechnology {
  id: number
  title: string
  image: string
  technologyLessons: [
    {
      id: number
      title: string
      lessonSubjects: [
        {
          id: number
          title: string
          content: string
          subjectsExercises: {
            id: number
            title: string
            PDF: string
          }
        }

      ]
    }
  ]
}

export interface ICreateTechnology {
  id: number
  title: string
  image: string
}

export interface ILesson {
  id: number
  title: string
}
export interface ISubject {
  id: number
  title: string
  content: string
}

export interface IExercise {
  id: number
  title: string
  PDF: string
}

