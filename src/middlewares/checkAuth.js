const  users = [
    {id: 1, name: "Dinh", role: 1},
    {id: 2, name: "Phuong Anh", role: 2},
];

export const checkAuth= (req, res,next) => {
    const userId = req.params.userId;
    const currentUser = users.find((user) => user.id == userId);
    if(!currentUser){
        return res.status(400).json({
            message : "Bạn không có quyền truy cập",
        })
    }
    next()
}