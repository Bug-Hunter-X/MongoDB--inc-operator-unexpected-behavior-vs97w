```javascript
//Correct usage of $inc operator, handling the case where the counter field doesn't exist
db.collection('myCollection').updateOne({"_id":ObjectId("6520287654321")},{
$inc:{counter:1},
$setOnInsert:{counter:1}
});
```