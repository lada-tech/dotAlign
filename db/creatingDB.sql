CREATE TABLE Message (
  Id INTEGER PRIMARY KEY,
  Subject TEXT DEFAULT NULL,
  MessageText TEXT DEFAULT NULL
);
CREATE TABLE Participant (
  Id INTEGER PRIMARY KEY,
  ParticipantTypeId INTEGER,
  EmailAddressId INTEGER,
  MessageId INTEGER
);
CREATE TABLE EmailAddress (
  Id INTEGER PRIMARY KEY,
  AddressText TEXT,
  DomainId INTEGER,
  PersonId INTEGER
);
CREATE TABLE ParticipantType (
  Id INTEGER PRIMARY KEY,
  Type VARCHAR(20)
);
CREATE TABLE Person (
  Id INTEGER PRIMARY KEY,
  Name VARCHAR(100)
);
CREATE TABLE Domain (
  Id INTEGER PRIMARY KEY,
  UrlText VARCHAR(20)
);
INSERT INTO Message (Id,Subject,MessageText)
VALUES (1,"A once in a lifetime chance","To whom it may concern...");
INSERT INTO Message (Id,Subject,MessageText)
VALUES (2,"Demo follow up","Dear sir or madam, ...");

INSERT INTO Participant (Id,ParticipantTypeId,EmailAddressId,MessageId)
VALUES (1,1,1,1);
INSERT INTO Participant (Id,ParticipantTypeId,EmailAddressId,MessageId)
VALUES (2,2,2,1);
INSERT INTO Participant (Id,ParticipantTypeId,EmailAddressId,MessageId)
VALUES (3,2,3,1);
INSERT INTO Participant (Id,ParticipantTypeId,EmailAddressId,MessageId)
VALUES (4,1,2,2);
INSERT INTO Participant (Id,ParticipantTypeId,EmailAddressId,MessageId)
VALUES (5,2,3,2);
INSERT INTO Participant (Id,ParticipantTypeId,EmailAddressId,MessageId)
VALUES (6,3,4,2);

INSERT INTO EmailAddress (Id,AddressText,DomainId,PersonId)
VALUES (1,"John.Doe@gmail.com",1,1);
INSERT INTO EmailAddress (Id,AddressText,DomainId,PersonId)
VALUES (2,"john@ValiCorp.com",2,1);
INSERT INTO EmailAddress (Id,AddressText,DomainId,PersonId)
VALUES (3,"jsmith@FWork.com",3,2);
INSERT INTO EmailAddress (Id,AddressText,DomainId,PersonId)
VALUES (4,"rstrong@FWork.com",3,3);
INSERT INTO EmailAddress (Id,AddressText,DomainId,PersonId)
VALUES (5,"daisies@gmail.com",1,3);
INSERT INTO EmailAddress (Id,AddressText,DomainId,PersonId)
VALUES (6,"susan@ValiCorp.com",2,4);

INSERT INTO ParticipantType (Id,Type)
VALUES (1,"From");
INSERT INTO ParticipantType (Id,Type)
VALUES (2,"To");
INSERT INTO ParticipantType (Id,Type)
VALUES (3,"CC");
INSERT INTO ParticipantType (Id,Type)
VALUES (4,"BCC");

INSERT INTO Person (Id,Name)
VALUES (1,"John Doe");
INSERT INTO Person (Id,Name)
VALUES (2,"Janet Smith");
INSERT INTO Person (Id,Name)
VALUES (3,"Robert Strong");
INSERT INTO Person (Id,Name)
VALUES (4,"Susan Jones");

INSERT INTO Domain (Id,UrlText)
VALUES (1,"gmail.com");
INSERT INTO Domain (Id,UrlText)
VALUES (2,"ValiCorp.com");
INSERT INTO Domain (Id,UrlText)
VALUES (3,"FWork.com");
