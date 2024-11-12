# Comprehensive Guide to Mongoose Methods

This guide covers the most commonly used Mongoose methods for MongoDB operations, complete with examples and explanations.

## Table of Contents
- [Comprehensive Guide to Mongoose Methods](#comprehensive-guide-to-mongoose-methods)
  - [Table of Contents](#table-of-contents)
  - [Document Creation \& Saving](#document-creation--saving)
  - [Querying Documents](#querying-documents)
  - [Updating Documents](#updating-documents)
  - [Deleting Documents](#deleting-documents)
  - [Query Building](#query-building)
  - [Population](#population)
  - [Aggregation](#aggregation)
  - [Middleware](#middleware)
  - [Schema Validation](#schema-validation)
  - [Instance and Static Methods](#instance-and-static-methods)
  - [Best Practices](#best-practices)
  - [Common Gotchas](#common-gotchas)

## Document Creation & Saving

Create and save documents to your MongoDB database:

```javascript
// Create a new document
const doc = new Model({...})

// Save methods
await doc.save()
await Model.create({...})
await Model.insertMany([{...}, {...}])
```

## Querying Documents

Find and retrieve documents from your database:

```javascript
// Basic find methods
await Model.find({ status: "active" })
await Model.findById(id)
await Model.findOne({ email: "example@email.com" })

// Using query operators
await Model.find({ age: { $gt: 18 } })
await Model.find({ status: { $in: ["active", "pending"] } })
// the same but with query operators
await Model.where('age').gt(18)
await Model.where('status').in(["active", "pending"])
```

## Updating Documents

Update existing documents in various ways:

```javascript
// Update single document
await Model.updateOne(
  { _id: id }, 
  { $set: { status: "active" } }
)

// Update multiple documents
await Model.updateMany(
  { age: { $lt: 18 } }, 
  { $set: { minor: true } }
)

// Find and update
await Model.findByIdAndUpdate(
  id, 
  { status: "active" }, 
  { new: true }
)

// Find one and update
await Model.findOneAndUpdate(
  filter, 
  update, 
  {
    new: true,        // Return updated doc
    upsert: true    // Create if doesn't exist
  }
)
```

## Deleting Documents

Remove documents from your database:

```javascript
// Delete methods
await Model.deleteOne({ _id: id })
await Model.deleteMany({ status: "inactive" })
await Model.findByIdAndDelete(id)
await Model.findOneAndDelete(filter)
```

## Query Building

Chain multiple query methods together:

```javascript
await Model.find({ status: "active" })
  .select("name email")    // Select specific fields
  .sort({ createdAt: -1 }) // Sort by creation date descending
  .skip(10)               // Skip first 10 documents
  .limit(5)              // Limit to 5 documents
  .exec()                // Execute the query
```

## Population

Handle references between documents:

```javascript
// Author Schema
const authorSchema = new Schema({
  name: String,
  email: String
});
const Author = mongoose.model('Author', authorSchema);

// Book Schema
const bookSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' }
});
const Book = mongoose.model('Book', bookSchema);

const bookSchema = new Schema({
  title: String,
  author: { type: Schema.Types.ObjectId, ref: 'Author' },
  publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' }
});

// Populate multiple paths
const book = await Book.findById(id)
  .populate('author')
  .populate('publisher');

// Alternative syntax
const book = await Book.findById(id)
  .populate(['author', 'publisher']);
```

## Aggregation

Perform complex data aggregations:

```javascript
await Model.aggregate([
  { 
    $match: { 
      status: "active" 
    } 
  },
  { 
    $group: { 
      _id: "$category", 
      total: { $sum: 1 } 
    } 
  }
])
```

## Middleware

Use middleware (hooks) for pre and post operations:

```javascript
// Pre-save middleware
schema.pre("save", function(next) {
  this.updatedAt = Date.now()
  next()
})

// Post-save middleware
schema.post("save", function(doc) {
  console.log(`${doc._id} has been saved`)
})
```

## Schema Validation

Implement validation in your schemas:

```javascript
const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /\S+@\S+\.\S+/.test(v)
      },
      message: "Invalid email format"
    }
  }
})
```

## Instance and Static Methods

Create custom methods for your models:

```javascript
// Instance method - called on document instances
schema.methods.setStatus = function(status) {
  this.status = status
  return this.save()
}

// Static method - called on the model itself
schema.statics.findByStatus = function(status) {
  return this.find({ status: status })
}

// Usage
const doc = await Model.findOne()
await doc.setStatus("active")        // Instance method
await Model.findByStatus("active")   // Static method
```

## Best Practices

1. **Always use async/await** with Mongoose operations for better error handling and cleaner code
2. **Use proper error handling** with try/catch blocks
3. **Implement proper validation** at the schema level
4. **Index frequently queried fields** for better performance
5. **Use lean()** when you don't need the full Mongoose document features
6. **Handle population carefully** to avoid performance issues

## Common Gotchas

1. **Versioning**: Watch out for the `__v` field
2. **Middleware**: Certain operations bypass middleware
3. **Validation**: Some update operations might skip validation
4. **Projections**: Some projection operations can't be used together
5. **Memory**: Large result sets can cause memory issues

Remember to consult the [official Mongoose documentation](https://mongoosejs.com/docs/guide.html) for the most up-to-date information and detailed explanations.
