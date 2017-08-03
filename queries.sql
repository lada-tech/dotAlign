
/* Queries from Assignment */

-- List of domains

SELECT UrlText
FROM Domain;

-- List of email addresses with corresponding owners' names

SELECT AddressText, Name
FROM EmailAddress
INNER JOIN Person
ON EmailAddress.PersonId = Person.Id;

-- List of domains with total number of emails sent to each one

SELECT UrlText, COUNT(*) AS total
FROM Participant
INNER JOIN EmailAddress
ON Participant.EmailAddressId = EmailAddress.Id
INNER JOIN Domain
ON EmailAddress.DomainId = Domain.Id
WHERE ParticipantTypeId IN (2,3,4)
GROUP BY UrlText;



