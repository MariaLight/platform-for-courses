export const transformLesson = (dbLesson) => ({

    id: dbLesson.id,
    title: dbLesson.title,
    imageUrl: dbLesson.image_url,
    moduleId: dbLesson.module_id,
    content: dbLesson.content,
    videoUrl: dbLesson.video_url,
    order: dbLesson.order,

})