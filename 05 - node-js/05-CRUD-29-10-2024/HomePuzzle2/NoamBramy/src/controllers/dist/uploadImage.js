"use strict";
exports.__esModule = true;
exports.uploadImage = void 0;
function uploadImage(req, res) {
    try {
        if (!req.file)
            throw new Error('Image upload failed');
        var imageUrl = "/uploads/" + req.file.filename;
        res.send({ message: 'Image successfully uploaded', imageUrl: imageUrl });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error uploading image' });
    }
}
exports.uploadImage = uploadImage;
