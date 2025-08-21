-- SQLite schema

CREATE TABLE user (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT
);

CREATE TABLE status (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  created DATETIME NOT NULL,
  updated DATETIME NOT NULL,
  due_date DATETIME,
  status_id INTEGER NOT NULL,
  FOREIGN KEY (status_id) REFERENCES status(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE user_task (
  user_id INTEGER NOT NULL,
  task_id INTEGER NOT NULL,
  PRIMARY KEY(user_id, task_id),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (task_id) REFERENCES task(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Users
INSERT INTO user (name, email, phone) VALUES ('Aarika Ellingworth', 'aellingworth0@harvard.edu', '483-396-8795');
INSERT INTO user (name, email, phone) VALUES ('Pren Goldsworthy', 'pgoldsworthy1@spotify.com', '635-572-8467');
INSERT INTO user (name, email, phone) VALUES ('Pablo Kisbee', 'pkisbee2@lulu.com', '790-962-8683');
INSERT INTO user (name, email, phone) VALUES ('Rodie Duncan', 'rduncan3@quantcast.com', '646-743-6191');
INSERT INTO user (name, email, phone) VALUES ('Aubry Polak', 'apolak4@indiatimes.com', '302-678-7931');
INSERT INTO user (name, email, phone) VALUES ('Maryrose Meadows', 'mmeadows5@comcast.net', '251-524-6594');
INSERT INTO user (name, email, phone) VALUES ('Pavel Brushneen', 'pbrushneen6@techcrunch.com', '316-170-3640');
INSERT INTO user (name, email, phone) VALUES ('Hedy Gerault', 'hgerault7@nymag.com', '176-177-5579');
INSERT INTO user (name, email, phone) VALUES ('王秀英', 'wang.xiuying@weebly.com', '891-952-6749');
INSERT INTO user (name, email, phone) VALUES ('إلياس', 'elias@github.com', '202-517-6983');
INSERT INTO user (name, email, phone) VALUES ('Donald Duck', 'donald@duck.com', NULL);


-- Tasks
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Wash clothes', 'Title says it all.', '2017-10-25 06:54:16', '2017-10-15 13:05:09', null, 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Become a billionaire', 'This should not take long, just invent a time machine, travel back to 2010 and buy bitcoin', '2017-09-26 03:06:46', '2017-10-08 06:14:31', '2017-12-22 20:58:03', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Plan meeting with London office', 'We will probably use skype', '2017-10-04 18:07:37', '2017-10-14 16:01:31', '2017-12-05 19:42:15', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Order groceries online', 'The fridge is almost empty, we need eggs and milk', '2017-09-20 19:34:43', '2017-10-15 23:35:45', '2017-12-24 16:00:46', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Empty the mailbox', NULL, '2017-09-27 15:17:08', '2017-10-08 17:31:16', null, 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Fix the flat tire on the bike', 'Tools are in the garage', '2017-09-13 23:16:30', '2017-10-06 04:03:52', '2017-12-07 11:51:11', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Wash the car', NULL, '2017-10-06 19:39:16', '2017-10-03 04:49:05', '2017-12-04 17:43:16', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Walk the dog', NULL, '2017-09-03 02:47:17', '2017-10-12 18:40:08', null, 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Write a book', 'Maybe something about dragons?', '2017-10-11 06:14:01', '2017-10-17 12:19:08', '2017-12-21 20:18:05', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Do HackYourFuture homework', NULL, '2017-10-04 13:55:16', '2017-10-10 00:18:05', '2017-12-19 17:01:10', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Iron shirts', NULL, '2017-09-23 03:59:58', '2017-10-19 08:30:48', '2017-12-08 11:00:35', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Water the potted plants', 'Maybe they need fertilizer as well', '2017-09-29 23:38:42', '2017-10-08 04:24:53', null, 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Buy wine for the birthday party', 'Both red and white wine', '2017-10-10 14:57:22', '2017-10-14 14:03:30', '2017-12-10 23:43:56', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Buy gift for Paul', 'He could use a shirt or a tie and some socks', '2017-09-09 05:22:08', '2017-10-17 15:58:05', '2017-12-04 20:45:18', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Change lightbulb in hallway', 'Should be an LED bulb', '2017-10-01 19:07:35', '2017-10-03 10:02:27', '2017-12-08 17:09:03', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Wash windows', NULL, '2017-10-02 22:15:17', '2017-10-07 22:31:35', '2017-12-06 03:36:09', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Setup salary databases for accounting', 'Use MySQL', '2017-10-25 05:35:33', '2017-10-10 23:22:33', '2017-12-05 00:19:08', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Learn how databases work', NULL, '2017-09-06 03:16:47', '2017-10-10 16:56:58', '2017-12-18 05:08:05', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Make the databases perform better', 'It should be possible to optimize the indexes', '2017-10-03 09:27:20', '2017-10-01 16:27:46', '2017-12-01 13:28:35', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Buy beer for the company party', '2 or 3 cases should be enough', '2017-10-08 01:39:02', '2017-10-13 23:07:41', null, 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Knit sweater', NULL, '2017-09-22 17:14:55', '2017-10-08 09:01:35', '2017-12-15 20:33:57', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Charge electric bicycle', 'It sucks to ride it without a battery!', '2017-10-10 12:25:07', '2017-10-07 21:45:01', '2017-12-10 19:02:17', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Buy new phone', 'The battery in the current one only lasts 5 hours 😞', '2017-09-17 00:25:34', '2017-10-09 11:48:12', null, 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Ride bike around Sjælland', 'Remember rainclothes and tire repair kit!', '2017-10-20 19:21:13', '2017-10-07 01:38:06', '2017-12-19 15:08:18', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Look at apartments in Ørestad', '2 or 3 rooms', '2017-10-30 09:47:00', '2017-10-19 06:11:26', null, 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Empty Mr Fluffy''s litterbox', NULL, '2017-09-28 03:09:06', '2017-10-13 10:38:34', '2017-12-20 23:37:18', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Buy new dining room table and chairs', 'Ikea has some on sale', '2017-09-21 12:02:34', '2017-10-02 02:05:11', '2017-12-06 00:14:30', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Renew buscard', '3 zones', '2017-10-07 22:47:51', '2017-10-09 15:50:03', '2017-12-01 14:25:40', 2);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Sign up for linkedin', 'Make the CV awesome! 😄', '2017-09-04 00:57:47', '2017-10-18 18:07:48', '2017-12-07 23:04:38', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Remove facebook from phone', 'To avoid interruptions when working', '2017-10-26 17:15:07', '2017-10-13 03:36:47', '2017-12-19 11:10:02', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Backup databases to external disk', 'Remember to store the disk in another physical location', '2017-09-09 17:32:33', '2017-10-01 21:18:59', '2017-12-23 14:21:01', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Put up the new lamp in the hallway', NULL, '2017-10-15 05:45:54', '2017-10-16 14:05:35', '2017-12-29 02:29:26', 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Hang up paintings in living room', NULL, '2017-09-10 05:36:11', '2017-10-09 17:40:42', null, 3);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Buy plane ticket to Auckland', 'Check prices online first!', '2017-09-05 09:07:22', '2017-10-15 09:36:06', '2017-12-07 11:10:05', 1);
INSERT INTO task (title, description, created, updated, due_date, status_id) VALUES ('Learn about NoSQL databases', 'MongoDB, CouchDB, etc.', '2017-10-20 01:41:53', '2017-10-04 07:19:56', '2017-12-23 10:13:42', 2);

-- Users-tasks
INSERT INTO user_task (user_id, task_id) VALUES(1, 5);
INSERT INTO user_task (user_id, task_id) VALUES(1, 35);
INSERT INTO user_task (user_id, task_id) VALUES(1, 11);
INSERT INTO user_task (user_id, task_id) VALUES(2, 4);
INSERT INTO user_task (user_id, task_id) VALUES(2, 26);
INSERT INTO user_task (user_id, task_id) VALUES(2, 29);
INSERT INTO user_task (user_id, task_id) VALUES(3, 22);
INSERT INTO user_task (user_id, task_id) VALUES(3, 13);
INSERT INTO user_task (user_id, task_id) VALUES(3, 19);
INSERT INTO user_task (user_id, task_id) VALUES(4, 24);
INSERT INTO user_task (user_id, task_id) VALUES(4, 20);
INSERT INTO user_task (user_id, task_id) VALUES(5, 20);
INSERT INTO user_task (user_id, task_id) VALUES(5, 18);
INSERT INTO user_task (user_id, task_id) VALUES(5, 15);
INSERT INTO user_task (user_id, task_id) VALUES(6, 10);
INSERT INTO user_task (user_id, task_id) VALUES(6, 7);
INSERT INTO user_task (user_id, task_id) VALUES(6, 27);
INSERT INTO user_task (user_id, task_id) VALUES(7, 33);
INSERT INTO user_task (user_id, task_id) VALUES(7, 18);
INSERT INTO user_task (user_id, task_id) VALUES(7, 23);
INSERT INTO user_task (user_id, task_id) VALUES(8, 26);
INSERT INTO user_task (user_id, task_id) VALUES(8, 30);
INSERT INTO user_task (user_id, task_id) VALUES(8, 11);
INSERT INTO user_task (user_id, task_id) VALUES(9, 34);
INSERT INTO user_task (user_id, task_id) VALUES(9, 15);
INSERT INTO user_task (user_id, task_id) VALUES(9, 1);
INSERT INTO user_task (user_id, task_id) VALUES(10, 29);
INSERT INTO user_task (user_id, task_id) VALUES(10, 16);
INSERT INTO user_task (user_id, task_id) VALUES(10, 1);
INSERT INTO user_task (user_id, task_id) VALUES(11, 26);
INSERT INTO user_task (user_id, task_id) VALUES(11, 27);
INSERT INTO user_task (user_id, task_id) VALUES(11, 17);
INSERT INTO user_task (user_id, task_id) VALUES(11, 2);
INSERT INTO user_task (user_id, task_id) VALUES(1, 3);
INSERT INTO user_task (user_id, task_id) VALUES(2, 6);
INSERT INTO user_task (user_id, task_id) VALUES(3, 8);
INSERT INTO user_task (user_id, task_id) VALUES(4, 9);
INSERT INTO user_task (user_id, task_id) VALUES(5, 12);
INSERT INTO user_task (user_id, task_id) VALUES(6, 14);
INSERT INTO user_task (user_id, task_id) VALUES(7, 21);
INSERT INTO user_task (user_id, task_id) VALUES(8, 25);
INSERT INTO user_task (user_id, task_id) VALUES(9, 28);
INSERT INTO user_task (user_id, task_id) VALUES(10, 31);
INSERT INTO user_task (user_id, task_id) VALUES(11, 32);
