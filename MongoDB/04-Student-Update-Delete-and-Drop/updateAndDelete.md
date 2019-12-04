# Updates, Deletes and Drops

## Instructions

* Go back to your classroom database.

```
use classroomdb
```

1. You've decided to take on a new hobby. Add Extreme Basketweaving to your array of hobbies.

```
db.students.update(
   { name: "joe" },
   { $push: { scores: { $each: [ 90, 92, 85 ] } } }
)

db.students.update({ name: “nick”}, {$push:{“hobbies”:“Extreme Basketweaving”}})

db.students.update({ name: “Raf” }, { $push: { hobbies: { $each: [ “gaming”, “hiking”, “cooking” ]}}})
```

2. While practicing for your Extreme Basketweaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.

```
db.students.updateOne({ name: “raf”}, {$set:{“os”:“pc”}})
```

3. Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.

```
db.students.deleteOne({ name: “Matt ”})
```

1. You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of `gavecandy` with a value of false to everyone in the database so you can keep track.

```
db.students.update({}, {$set: {“gacecandy”: false}}, false, true)
```

5. All this work made you hungry, so you bought yourself some candy. Change the value of `gavecandy` to `true` in your entry.

```
db.students.updateOne({ name: “nick”}, {$set:{“gavecandy”:true}})
```
