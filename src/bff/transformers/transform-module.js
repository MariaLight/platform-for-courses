export const transformModule = (dbModule) => ({

    id: dbModule.id,
    title: dbModule.title,
    imageUrl: dbModule.image_url,
    courseId: dbModule.course_id,
    order: dbModule.order,

})