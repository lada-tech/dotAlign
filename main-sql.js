
const colors = require('colors');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./dotalign.sqlite.db');

console.log('Opening Database '.blue);

  db.all("SELECT UrlText FROM Domain;", function(err,rows) {
    console.log('List of all domains:'.yellow);
    rows.forEach(function (row) {
      console.log(row.UrlText.green);
    })
  });

  db.all("SELECT AddressText, Name FROM EmailAddress INNER JOIN Person ON EmailAddress.PersonId = Person.Id;", function(err,rows) {
      console.log('List of email addresses with corresponding owners names:'.yellow);
      rows.forEach(function (row) {
        console.log(row.AddressText.green,'    ',row.Name.green);
      })
  });

  db.all("SELECT UrlText, COUNT(*) AS total FROM Participant INNER JOIN EmailAddress ON Participant.EmailAddressId = EmailAddress.Id INNER JOIN Domain ON EmailAddress.DomainId = Domain.Id WHERE ParticipantTypeId IN (2,3,4) GROUP BY UrlText;", function(err,rows) {
      console.log('List of domains with total number of emails sent to each one:'.yellow);
      rows.forEach(function (row) {
        console.log(row.UrlText.green,'    ', row.total.toString().green);
      })
  });

db.close();

