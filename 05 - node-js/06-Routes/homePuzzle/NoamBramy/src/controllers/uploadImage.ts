
export function uploadImage(req:any, res:any) {
  try {
      if (!req.file) throw new Error('Image upload failed');
      const imageUrl = `/uploads/${req.file.filename}`;
      res.send({ message: 'Image successfully uploaded', imageUrl });
  } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error uploading image' });
  }
}