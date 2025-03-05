import User from "../models/User.js"

export const addBookmarks = async (req, res) => {
    try {
        const { article } = req.body;
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        console.log(user)

        const someArticle = user.bookmarks.some(b => b.url === article.url)
        console.log(someArticle)
        if (someArticle) res.status(400).json({ message: 'Already exists' })
        user.bookmarks.push(article);
        await user.save();
        res.status(201).json({
            message: "Bookmark added successfully",
            bookmarks: user.bookmarks,
        });

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export const getBookmarks = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({
            data: user.bookmarks
        })
    }
    catch (error) {

    }
}

export const removeBookmarks = async (req, res) => {
    try {
        const { id, articleId } = req.params;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        user.bookmarks = user.bookmarks.filter((b) => b._id?.toString() !== articleId);
        await user.save();

        res.status(200).json({
            message: "Bookmark removed",
        });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
}