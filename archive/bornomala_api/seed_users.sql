-- Auto-generated Bornomala Users Seed Script
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'tblUser')
BEGIN
    CREATE TABLE tblUser (
        UserId INT PRIMARY KEY,
        UserName NVARCHAR(MAX) NULL,
        UserType NVARCHAR(MAX) NULL,
        EmpMasterCode NVARCHAR(MAX) NULL,
        LoginName NVARCHAR(MAX) NULL,
        Password NVARCHAR(MAX) NULL,
        UserStatus NVARCHAR(50) NULL,
        Email NVARCHAR(MAX) NULL,
        ContactNo NVARCHAR(50) NULL,
        SchoolId INT NULL,
        SchoolCode NVARCHAR(50) NULL,
        SchoolName NVARCHAR(MAX) NULL
    );
END;

IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 1)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (1, N'admin', N'Member', N'2', N'admin', N'bhsc@2019', N'active', N'naimul.islam.pulak@gmail.com', N'1760150555', 1, N'SReg-Admin', N'Admin');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2, N'Farida Yasmin', N'Member', N'1124', N'farida', N'f123456', N'Active', N'farida@gmail.com', N'01910188168', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 3)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (3, N'Hazara Begum', N'Member', N'1070', N'hazara', N'01813312523', N'Active', N'dalia0554@gmail.com', N'01813312523', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 4)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (4, N'Samima Nasrin', N'Member', N'1106', N'nasrin', N'nasrin1', N'Active', N'nasrin@gmail.com', N'01682086649', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 5)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (5, N'Taslima Nasrin', N'Member', N'1073', N'taslima', N'taslima2', N'Active', N'taslima@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 6)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (6, N'Yasmin Akthar', N'Member', N'204', N'yasmin', N'yasmin3', N'Active', N'yasmin@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 7)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (7, N'Moktar Hossain', N'Member', N'1040', N'moktar', N'zx1234567', N'Active', N'moktarbma@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 8)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (8, N'Shanaj Begum', N'Member', N'206', N'shahnaj', N'shahnaj4', N'Active', N'shanaj@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 9)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (9, N'Rabeya Khatoon', N'Member', N'1050', N'rabeya', N'rabeya5', N'Active', N'rabeya@gmail.com', N'01712024929', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 10)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (10, N'Nikhil Chandra Hawladar', N'Member', N'1085', N'nikhil', N'nikhil6', N'Active', N'nikhil@gmail.com', N'01749511590', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 11)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (11, N'Khadiza Yasmin', N'Member', N'209', N'shukhi', N'shukhi7', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 12)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (12, N'Ruma Rani Mondal', N'Member', N'210', N'ruma', N'ruma8', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 13)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (13, N'TAHMINA SULTANA', N'Member', N'1060', N'tahamina', N'tahamina9', N'Active', N'tahamina@gmail.com', N'01918937907', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 14)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (14, N'Anwar Hossain', N'Member', N'1090', N'anwar', N'anwar1', N'Active', N'anwar@gmail.com', N'01552557344', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 15)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (15, N'Joyosri Mondal', N'Member', N'213', N'joyosri', N'joyosri2', N'Active', N'moktar@gmail.com', N'01746829181', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 16)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (16, N'Rabiun Nahar', N'Member', N'1106', N'nahar', N'nahar4', N'Active', N'rabiun@gmail.com', N'01670924216', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 17)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (17, N'Suma Akthar', N'Member', N'215', N'suma', N'suma4', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 18)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (18, N'Rahima Khatun', N'Member', N'1059', N'rahima', N'rahima5', N'Active', N'rahima@gmail.com', N'01924947115', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 19)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (19, N'Ibrahim Khalil', N'Member', N'217', N'ibrahim', N'131986', N'Active', N'ebrahim@gmail.com', N'01916572728', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 20)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (20, N'Barnamala', N'Member', N'1147', N'academi', N'9999', N'Active', N'alim1.2.86@gmail.com', N'01716544878', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 21)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (21, N'Sonjib Kumar Saha', N'Member', N'219', N'sonjib', N'sonjib8', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 22)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (22, N'Moniruzzaman Kabir', N'Member', N'1074', N'kabir', N'kabir9', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 23)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (23, N'Prodip Kumar Shil', N'Member', N'1120', N'prodip', N'prodip1', N'Active', N'prodip@gmail.com', N'0171807962', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 24)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (24, N'Arju Ara', N'Member', N'1067', N'arju', N'arju2', N'Active', N'moktar@gmail.com', N'01552408272', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 25)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (25, N'Anzuman Ara Shova', N'Member', N'223', N'shova21', N'shova*1981', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 26)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (26, N'Sharmin Sultana', N'Member', N'1181', N'sultana22', N'291284', N'Active', N'sultana@gmail.com', N'01687887316', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 27)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (27, N'Suma Saha', N'Member', N'225', N'suma23', N'1582', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 28)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (28, N'Shawkat Ali', N'Member', N'1129', N'ali', N'1973', N'Active', N'shawkat@gmail.com', N'01937839844', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 29)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (29, N'Dilara begum', N'Member', N'227', N'dilara', N'dilara1', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 30)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (30, N'Zahid Uddin', N'Member', N'1131', N'zahid', N'zahid2', N'Active', N'zahid@gmail.com', N'01711112846', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 31)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (31, N'Samsun Nahar Shisir', N'Member', N'1061', N'shishir', N'1000', N'Active', N'samsun@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 32)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (32, N'Rabeya Begum', N'Member', N'1039', N'1039', N'1039', N'Active', N'rabeya@gmail.com', N'01683940720', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 33)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (33, N'MD. ASRAFUL HOQUE', N'Member', N'1056', N'hoque', N'hoque5', N'Active', N'hoque@gmail.com', N'01712708035', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 34)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (34, N'MD. JAHIRUL ISLAM', N'Member', N'1096', N'zahir', N'zahir6', N'Active', N'zahir@gmail.com', N'01724422024', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 35)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (35, N'MD. KAMRUL ISLAM', N'Member', N'1119', N'kamrul', N'kamrul7', N'Active', N'kamrul@gmail.com', N'01917085325', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 36)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (36, N'Ma Abdul Karim ', N'Member', N'1158', N'karim', N'karim6', N'Active', N'karim@gmail.com', N'01556364705', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 37)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (37, N'sonjit10', N'Member', N'235', N'sonjit', N'sonjit10', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 38)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (38, N'SUSANTA KUMAR DAS', N'Member', N'1099', N'shusanto', N'shusanto', N'Active', N'shusanto@gmail.com', N'01713048261', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 39)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (39, N'Batunuzzaman jewel', N'Member', N'1075', N'juel', N'juel1', N'Active', N'Batunuzzaman@gmail.com', N'01930133669', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 40)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (40, N'FAUZIA SULTANA', N'Member', N'1032', N'fowjia', N'fowjia2', N'Active', N'moktar@gmail.com', N'01816745552', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 41)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (41, N'KANIZ FATEMA', N'Member', N'1051', N'fatema', N'fatema3', N'Active', N'fatema@gmail.com', N'01552413865', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 42)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (42, N'Md. Al-Amin', N'Member', N'1182', N'amin', N'amin4', N'Active', N'amin@gmail.com', N'01918901249', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 43)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (43, N'MD. SHIHABUR RAHMAN MIRZA', N'Member', N'1047', N'mirza', N'mirza10', N'Active', N'mirza@gmail.com', N'01715156128', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 44)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (44, N'ABUL HOSSAIN', N'Member', N'1052', N'ahossain', N'ahossain9', N'Active', N'moktar@gmail.com', N'01710929963', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 45)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (45, N'MD. SULTAN AHMED', N'Member', N'1095', N'sultan', N'sultan6', N'Active', N'sultan@gmail.com', N'01717079856', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 46)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (46, N'Md. Abdul Hamid Miah', N'Member', N'1026', N'ahamid', N'ahamid8', N'Active', N'ahamid@gmail.com', N'01918342859', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 47)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (47, N'Bivuti Bushon Mitra', N'Member', N'245', N'mitra', N'mitra9', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 48)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (48, N'Shimul Dash', N'Member', N'1115', N'shimul', N'shimul1', N'Active', N'moktar@gmail.com', N'01964298001', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 49)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (49, N'MOHAMMAD MIZANUR RAHMAN', N'Member', N'1042', N'nannu', N'nanno67', N'Active', N'nannu@gmail.com', N'01716269594', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 50)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (50, N'Mohammad Abul Kalam', N'Member', N'1159', N'akalam', N'akalam3', N'Active', N'akalam@gmail.com', N'01913795249', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 51)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (51, N'Rahima Akther', N'Member', N'249', N'akthar', N'akthar4', N'Active', N'moktar@gmail.com', N'01673577333', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 52)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (52, N'Hashne Bhanu', N'Member', N'1034', N'hasna', N'hasna5', N'Active', N'hasna@gmail.com', N'01821513890', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 53)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (53, N'Nidhir Kumar', N'Member', N'1149', N'nidir', N'nidir6', N'Active', N'nidhir@gmail.com', N'01675394253', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 54)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (54, N'Md.Milon Miah', N'Member', N'252', N'milon', N'milon7', N'Active', N'moktar@gmail.com', N'01710664858', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 55)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (55, N'MD. MASUD PARVEZ', N'Member', N'1079', N'masud', N'masud8', N'Active', N'masud@gmail.com', N'01924855677', 6, N'SCH006', N'Barnamala School & College');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 56)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (56, N'Rashida Akther', N'', N'1049', N'rashida', N'rashida8', N'Active', N'rashida@gmail.com', N'01685091901', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 57)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (57, N'Amir Hossain', N'', N'', N'arhossain', N'01675691170', N'Active', N'arhossain@gmail.com', N'6465', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 58)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (58, N'Showpon Kumar Mondal', N'', N'1108', N'showpon', N'Showpon1', N'Active', N'showpon@gmail.com', N'01917031647', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 59)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (59, N'MD. MOSLEH UDDIN', N'', N'1023', N'muddin', N'muddin2', N'Active', N'muddin@gmail.com', N'564654', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 60)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (60, N'Mizanur Rahman Khan', N'', N'1054', N'mrahman', N'mrahman3', N'Active', N'mrahman@gmail.com', N'3213213', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 61)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (61, N'MD. EAR HOSSAIN', N'', N'1065', N'yhossain', N'yhossain4', N'Active', N'yhossain@gmail.com', N'01816716526', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 62)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (62, N'SHUFIA AKTER', N'', N'1076', N'shufiaakter', N'01924446313', N'Active', N'sakther@gmail.com', N'01924446313', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 63)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (63, N'KAMRUL HASAN', N'', N'1045', N'khasan', N'khasan3', N'Active', N'khasan@gmail.com', N'123456', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 64)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (64, N'REHANA BEGUM ', N'', N'1035', N'rbegum', N'rbegum4', N'Active', N'rbegum@mail.com', N'01726712288', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 65)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (65, N'MD. ATIQUR RAHMAN', N'', N'1043', N'atiq', N'atiq4', N'Active', N'atiq@gmail.com', N'01714985932', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 66)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (66, N'Mosharof Hossain', N'', N'1083', N'mosharof', N'mosharof5', N'Active', N'mosharof@gmail.com', N'01916154075', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 67)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (67, N'Khandakar Hamidul Haque', N'', N'1081', N'khandakar', N'khandakar7', N'Active', N'khandakar@gmail.com', N'01820083412', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 68)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (68, N'Salma Sultana', N'', N'', N'salma', N'salma9', N'Active', N'salma@gmail.com', N'01743955875', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 69)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (69, N'Nazmun Nahar', N'', N'1091', N'nnahar', N'nnahar1', N'Active', N'nnahar@gmail.com', N'01724415886', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 70)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (70, N'Md. Rafiqul Islam', N'', N'1008', N'rislam', N'30111969', N'Active', N'rafiq@gmail.com', N'01819145687', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 71)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (71, N'Md. Golam Moullah ', N'', N'1005', N'gmoullah', N'gmoullah11', N'Active', N'gmoullah@gmail.com', N'01714396957', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 72)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (72, N'Nil Ratan Mondol', N'', N'1082', N'ratan', N'ratan1', N'Active', N'ratan@gmail.com', N'01989656064', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 73)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (73, N'Fatema Begum Toma', N'', N'1011', N'toma', N'toma1', N'Active', N'toma@gmail.com', N'01720397633', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 74)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (74, N'Mazedul Islam', N'', N'', N'mazed', N'mazed3', N'Active', N'mazed@gmail.com', N'01683573100', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 75)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (75, N'Luthfunahar moni', N'', N'', N'moni', N'moni4', N'Active', N'moni@gmail.com', N'01552327233', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 76)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (76, N'NASIMA AKTER', N'', N'1089', N'nasima', N'nasima5', N'Active', N'nasima@gmail.com', N'01935459227', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 77)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (77, N'Roksana Begum', N'', N'1016', N'roksana', N'roksana6', N'Active', N'roksana@gmail.com', N'01911294352', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 78)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (78, N'Abdul Baten', N'', N'', N'baten', N'baten8', N'Active', N'baten@gmail.com', N'01724499655', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 79)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (79, N'Khalil Dewan', N'', N'1063', N'khalild', N'khalild9', N'Active', N'khalild@gmail.com', N'01913498502', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 80)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (80, N'MD. MAHBUBUR RAHMAN', N'', N'1087', N'mahabub', N'mahabub1', N'Active', N'mahabub@gmail.com', N'01914844234', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 81)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (81, N'Md. Abdul Bari ', N'', N'1015', N'abari', N'abari2', N'Active', N'abari@gmail.com', N'01915370406', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 82)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (82, N'Sayeda Khodezatul Manna', N'', N'1019', N'khadija', N'khadija5', N'Active', N'khadija@gmail.com', N'01718080530', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 83)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (83, N'MD.  MASUDUR RAHMAN ', N'', N'1084', N'nadim', N'nadim1', N'Active', N'nadim@gmail.com', N'01721870253', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 84)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (84, N'Md. Mozibiur Rahman', N'', N'1027', N'mozib', N'mozib139', N'Active', N'mozib@gmail.com', N'01918990501', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 85)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (85, N'Md. Hasanur Rahman', N'', N'1184', N'hrahman', N'hrahman1', N'Active', N'hasansajalkhan@gmail.com', N'017176545814', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 86)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (86, N'ABU ZAFOR HOWLADER', N'', N'1046', N'azafor', N'azafor1965', N'Active', N'azafor1@gmail.com', N'01712123599', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 87)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (87, N'Obaydur Rahman', N'', N'1155', N'obaydur', N'obaydur1', N'Active', N'obaydur@gmail.com', N'01923103647', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 88)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (88, N'MD. FARUQUE AHMED', N'', N'1103', N'faruque', N'faruque1', N'Active', N'faruque4.3.60@gmail.com', N'01921351204', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 89)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (89, N'Bashir Ahmed ', N'', N'1178', N'bashir', N'1688', N'Active', N'bashirahmedbdg@gmail.com', N'01516781904', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 90)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (90, N'Smriti Rani Hawlader', N'', N'', N'rani', N'rani1', N'Active', N'sriti@gmail.com', N'01912366169', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 91)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (91, N'Shamsul Huda', N'', N'', N'huda', N'29985', N'Active', N'huda@gmail.com', N'01744138831', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 92)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (92, N'Shakera Akter', N'', N'1080', N'shakera', N'shakera4', N'Active', N'shakeraakter@gmail.com', N'01710268488', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 93)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (93, N'Lutfun Naher', N'', N'1057', N'naher', N'naher9', N'Active', N'nahar@gmail.com', N'01556361140', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 94)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (94, N'Amena Khatun', N'', N'1117', N'rekha', N'rekha7', N'Active', N'rekha@gmail.com', N'01917617554', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 95)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (95, N'Mahmuda Khanom', N'', N'', N'mitu', N'1212', N'Active', N'mahmuda@gmail.com', N'01919429559', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 96)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (96, N'Rupali Begum', N'', N'1078', N'rupali', N'rupali7', N'Active', N'rupali@gmail.com', N'01964833920', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 97)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (97, N'Khandaker Alamgir ', N'', N'1101', N'alamgir', N'01712', N'Active', N'alomgir@gamil.com', N'01712430208', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 98)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (98, N'Nasira Sharmin', N'', N'1153', N'nasira', N'17883', N'Active', N'nasiramishu@gmail.com', N'01673191508', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 99)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (99, N'GOLAM MOULLAH ', N'', N'', N'moullah', N'moullah11', N'Active', N'moullah@gmail.com', N'01714396957', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 100)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (100, N'Novo', N'member', N'', N'novo', N'7417669n', N'Active', N'novob@ymail.com', N'01954785657', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 101)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (101, N'Farzana Munia', N'', N'', N'munia', N'munia8', N'Active', N'farzana@gmail.com', N'01731107110', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 102)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (102, N'SHAHIN AKTER', N'', N'1017', N'shahin', N'shahin8', N'Active', N'shahin@gmail.com', N'01675675408', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 103)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (103, N'MD. AZADUL ISLAM', N'', N'1173', N'azad', N'01717340', N'Active', N'azadulislam1@gmail.com', N'01717340159', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 104)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (104, N'MANSURA AKTER MUKTA', N'mukta', N'1152', N'mukta', N'mukta8', N'Active', N'mukta@gmail.com', N'01929165580', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 105)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (105, N'MD. ANWAR HOSSAIN', N'', N'1090', N'anwar2', N'1995', N'Active', N'anwardu002@gmail.com', N'01552557344', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 106)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (106, N'Nila', N'', N'', N'nila', N'01728778760', N'Active', N'nila@gmail.com', N'01774402393', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 107)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (107, N'Shamsun Nahar Begum', N'', N'', N'snahar', N'1968', N'Active', N'snahar@gmail.com', N'01715083419', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 108)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (108, N'Julekha Begum', N'', N'1176', N'julekha', N'arif', N'Active', N'julekha@gmail.com', N'01742202518', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 109)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (109, N'KANIZ AFROZA BULBUL', N'', N'1024', N'bulbul', N'bulbul8', N'Active', N'BULBUL@GMAIL.COM', N'01912874646', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 110)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (110, N'Rafiqul Islam Khan', N'', N'', N'rkhan', N'1968', N'Active', N'khan@gmail.com', N'01728695063', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 111)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (111, N'Barnamala1', N'Employee', N'1171', N'academi1', N'bhsc@10', N'Active', N'didarul1981zend@gmail.com', N'01552404583', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 112)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (112, N'DELWAR HOSSEN SIDDIQ', N'', N'1037', N'delwar', N'ratin', N'Active', N'delwar@gmail.com', N'01819190219', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 113)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (113, N'MUHAMMAD SAIFULLAH', N'', N'1036', N'saifullah', N'01722993141', N'Active', N'saifullah@gmail.com', N'01722993141', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 114)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (114, N'A.K.M. JAHANGIR ALAM', N'', N'1041', N'jahangir', N'01718686215', N'Active', N'jahangir@gmail.com', N'01718686215', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 115)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (115, N'SANJIB KUMAR', N'', N'1185', N'sanjib', N'1979', N'Active', N'rajibsarkar567@gmail.com', N'01966410560', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 116)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (116, N'LOVELY YEASMIN', N'', N'1068', N'lovely', N'1972', N'Active', N'lovely@gmail.com', N'01931451749', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 117)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (117, N'KHALEDA KAMAL KONA', N'', N'1012', N'kona', N'1972', N'Active', N'khaledakamalkona@gmail.com', N'01712028411', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 118)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (118, N'AYESHA AKTER', N'', N'1162', N'ayesha', N'1919', N'Active', N'ayesha@gmail.com', N'01630795883', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 119)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (119, N'Tapati rani', N'', N'1167', N'Tapati rani', N'rani', N'Active', N'parvin@gmail.com', N'01759154124', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 120)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (120, N'MD SYFUL ALAM KHAN', N'', N'1048', N'khan', N'01923468991', N'Active', N'syfuk@gmail.com', N'01923468991', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 121)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (121, N'AMIR HOSEN', N'', N'1163', N'amir', N'1987', N'Active', N'ahosen01@gmail.com', N'01680314914', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 122)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (122, N'RAFIQUL ISLAM', N'', N'1008 ', N'rafiq', N'1969', N'Active', N'rafiq69@gmail.com', N'01819145687', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 123)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (123, N'MASUD PARVEZ', N'', N'1100', N'parvez', N'1985', N'Active', N'masud@gmail.com', N'01924855677', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 124)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (124, N'ASHOK KUMAR PODDER', N'', N'1020', N'ashok', N'1977', N'Active', N'ashok@gmail.com', N'01712665579', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 125)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (125, N'Abu Zafor Khan', N'', N'1151 ', N'zafor', N'khan', N'Active', N'www.azafor@gmail.com', N'01714613141', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 126)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (126, N'Selina Akte', N'', N'1165', N'selina', N'05102000', N'Active', N'selina@gmail.com', N'01678326127', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 127)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (127, N'Md. EAR HOSSAIN', N'', N'', N'ear', N'1969', N'Active', N'ear@gmail.com', N'01678326126', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 128)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (128, N'Simu ', N'', N'1102', N'simu', N'simu2', N'Active', N'simu@gmail.com', N'01926425898', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 129)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (129, N'Sabbir Hossain', N'', N'', N'Sabbir Hossain', N'1989', N'Active', N'sabbirhossain1781@gmil.com', N'01700999863', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 130)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (130, N'Md. Afjal Hossen', N'', N'1175', N'afjal', N'281290', N'Active', N'afjalhossen@gmail.com', N'01683939689', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 131)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (131, N'Ezharul Hoque', N'', N'1038', N'ezhar', N'1964', N'Active', N'hoque@gmail.com', N'01940090756', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 132)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (132, N'SHAHIDA BEGUM', N'', N'', N'shahida', N'begum', N'Active', N'shahida@gmail.com', N'01955338089', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 133)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (133, N'Md. Ahsenul Haque ', N'', N'1007', N'ahaque', N'01911779781', N'Active', N'ahsan@gmail.com', N'01911779781', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 134)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (134, N'Mosammed Shirina Akter', N'', N'1010', N'shirina', N'shirina11', N'Active', N'shirina@gmail.com', N'01731880864', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 135)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (135, N'RAFIQUL ISLAM HAWLADER', N'', N'', N'rafique', N'1965', N'Active', N'rafique@gmail.com', N'017155837842', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 136)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (136, N'liloun nahar', N'', N'1021', N'liloun', N'liloun1', N'Active', N'liloun@yahoo.com', N'01737156581', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 137)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (137, N'College ', N'', N'', N'college', N'1039', N'Active', N'college@gmail.com', N'01716544878', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 138)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (138, N'Sirajul Islam', N'', N'1121', N'Accountshead', N'siraj58', N'Active', N'siraj58@gmail.com', N'01715567436', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 139)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (139, N'RASEDUL ISLAM', N'', N'', N'rashed', N'54321', N'Active', N'rasedulislambd@yahoo.com', N'01723821938', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 140)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (140, N'MD. WHAHEDUZZAMAN', N'', N'1018', N'zaman', N'9429', N'Active', N'zaman@gmail.com', N'01711942979', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 141)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (141, N'KHODEJATUL MANNA', N'', N'', N'manna', N'01718080530', N'Active', N'manna@gmail.com', N'01718080530', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 142)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (142, N'Ripan Kumar Halder', N'', N'1194', N'ripan', N'kumar', N'Active', N'ripansash@gmail.com', N'01913606936', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 143)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (143, N'Sabbir Hossain', N'', N'1112', N'Sabbir Hossain', N'1989', N'Active', N'sabbirhossain1781@gmil.com', N'01700999863', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 144)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (144, N'NAZMUL HUDA', N'', N'1148', N'nazmul', N'lucky', N'Active', N'nazmul19860117@gmail.com', N'01734501983', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 145)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (145, N'MD. Shamsul Alam', N'', N'', N'alam', N'1968', N'Active', N'alam@gmail.com', N'01753419042', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 146)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (146, N'Abdul Quddus', N'', N'1164', N'quddus', N'quddus', N'Active', N'quddus@gmail.com', N'01622575655', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 147)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (147, N'Alem Mahmud', N'', N'1190', N'alem', N'alem', N'Active', N'afrins977@gmail.com', N'01911092383', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 148)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (148, N'Nowara Parvin', N'', N'', N'nowara', N'nowara1', N'Active', N'nowara@gmail.com', N'01708761300', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 149)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (149, N'Samsun Nahar Hashi', N'', N'1189', N'hashi', N'1986', N'Active', N'hashi@mail.com', N'01912097436', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 150)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (150, N'MD. ZAHIDUL ISLAM', N'', N'1183', N'tanjim', N'01714522984', N'Active', N'zahidulpi@gmail.com', N'01714522984', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 151)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (151, N'Md Shuhel Rana', N'', N'1188', N'rana', N'rana1', N'Active', N'rana@gmail.com', N'01674208855', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 152)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (152, N'Md. Golam Ahad', N'', N'1107', N'mgahad', N'mgahad1', N'Active', N'mgahad1964@gmail.com', N'01718070090', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 153)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (153, N'asfasfd', N'', N'234234234234', N'asdf', N'a', N'Active', N'aasdf@asdf.com', N'3213213', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 154)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (154, N'Nasim Sardar', N'', N'1115', N'sardar', N'1234@', N'Active', N'sardarnasim.ez@gmail.com', N'01911087655', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 155)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (155, N'RABYA AKTER REMA', N'', N'1220', N'rema', N'01971', N'Active', N'masud@safeguandhealthcare.com', N'01971630760', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 156)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (156, N'MD. SYFUL ALAM KHAN', N'', N'1048', N'khan1048', N'1234', N'Active', N'syful@gmail.com', N'01923468991', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 157)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (157, N'SHIREEN AKTER RUBY', N'', N'1196', N'ruby', N'ruby1976', N'Active', N'ruby@gmail.com', N'01677588366', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 158)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (158, N'SANJIT KUMAR SAHA', N'', N'1077', N'sanjit', N'sanjit', N'Active', N'sanjit@gmil.com', N'01818870377', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 159)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (159, N'G.M Hasib', N'', N'1198', N'hasib', N'hasib', N'Active', N'beabutterfly2012@yahoo.com', N'01671186587', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 160)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (160, N'Lutfun Nahar', N'', N'1006', N'1006', N'1006', N'Active', N'Lutfun@gmail.com', N'01552327233', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 161)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (161, N'Nowara Parvin1013', N'', N'1013', N'1013', N'1013', N'Active', N'Parvin1013@gmail.com', N'1191407484', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 162)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (162, N'Md. Ruhul Amin', N'', N'1014', N'1014', N'1014', N'Active', N'1014@gmail.com', N'01716893059', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 163)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (163, N'Md. Ibrahim Khalil1022', N'', N'1022', N'1022', N'1022', N'Active', N'1022@gmail.com', N'01927643242', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 164)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (164, N'Md. Rafiqul Islam1025', N'', N'1025', N'1025', N'1025', N'Active', N'1025@gmail.com', N'01715537842', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 165)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (165, N'Md. Aminul Islam1031', N'', N'1025', N'1031', N'1031', N'Active', N'1031@gmail.com', N'01718527181', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 166)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (166, N'KHAN NASIR UDDIN1044', N'', N'1044', N'1044', N'1044', N'Active', N'1044@gmail.com', N'01956168536', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 167)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (167, N'MD. SAMSUL ALAM1053', N'', N'1053', N'1053', N'1053', N'Active', N'1053@gmail.com', N'01753419042', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 168)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (168, N'MD. KUDDUSUR RAHMAN', N'', N'1055', N'1055', N'1055', N'Active', N'1055@gmail.cim', N'01914186316', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 169)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (169, N'SHAMSUDDIN CHOWDHURY1058', N'', N'1058', N'1058', N'1058', N'Active', N'1058@gmail.com', N'01815599481', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 170)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (170, N'ALEYA KHATUN1062', N'', N'1062', N'1062', N'1062', N'Active', N'1062@gmail.com', N'01726078231', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 171)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (171, N'DELARA BEGUM1071', N'', N'1071', N'1071', N'1071', N'Active', N'1071@gmail.com', N'01716501030', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 172)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (172, N'MOHAMMAD IBRAHIM KHALIL', N'', N'1098', N'1098', N'1098', N'Active', N'1098@gmail.com', N'01721063889', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 173)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (173, N'Md. Rashedul Islam1086', N'', N'1086', N'1086', N'1086', N'Active', N'1086@gmail.com', N'01723821938', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 174)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (174, N'Rabiun Nahar1105', N'', N'1105', N'1105', N'1105', N'Active', N'1105@gmail.com', N'01670924216', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 175)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (175, N'Md Ibrahim Khalil1109', N'', N'1109', N'1109', N'1109', N'Active', N'1109@gmail.com', N'01927643242', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 176)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (176, N'SUMA RANI SAHA', N'', N'1118', N'1118', N'1118', N'Active', N'1118@gmail.com', N'01710665606', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 177)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (177, N'Md. SIRAJUL ISLAM1121', N'', N'1121', N'1121', N'1121', N'Active', N'1121@gmail.com', N'01715567436', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 178)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (178, N'MST. SHMSUN NAHAR BEGUM1122', N'', N'1122', N'1122', N'1122', N'Active', N'1122@gmail.com', N'01715083419', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 179)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (179, N'MD.  SALIM MIYA1123', N'', N'1123', N'1123', N'1123', N'Active', N'1123@gmail.com', N'01775091068', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 180)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (180, N'MD. SALIM BISWAS1125', N'', N'1125', N'1125', N'1125', N'Active', N'1125@gmail.com', N'01951715694', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 181)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (181, N'SALEHA BEGUM1127', N'', N'1127', N'1127', N'1127', N'Active', N'1127@gmail.com', N'01946738222', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 182)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (182, N'MST SAHARA BEGUM1130', N'', N'1130', N'1130', N'1130', N'Active', N'1130@gmail.com', N'01917532901', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 183)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (183, N'ANZUMANARA BEGUM1134', N'', N'1134', N'1134', N'1134', N'Active', N'1134@gmail.com', N'01720998748', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 184)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (184, N'Md. Shah Jalal Bhuian1156', N'', N'1156', N'1156', N'1156', N'Active', N'1156@gmail.com', N'01621821207', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 185)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (185, N'Khadiza Akhter Baby', N'', N'1161', N'1161', N'1161', N'Active', N'1161@gmail.com', N'01969171158', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 186)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (186, N'Shirin Akter1168', N'', N'1168', N'1168', N'1168', N'Active', N'1168@gmail.com', N'01676368466', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 187)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (187, N'Shahanaz Pervin1169', N'', N'1169', N'1169', N'1169', N'Active', N'1169@gmail.com', N'01552553793', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 188)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (188, N'MD. RAFIQUL ISLAM1174', N'', N'1174', N'1174', N'1174', N'Active', N'1174@gmail.com', N'01728695063', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 189)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (189, N'Md. Hasanur Rahman1184', N'', N'1184', N'1184', N'1184', N'Active', N'1184@gmail.com', N'01717654581', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 190)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (190, N'shamim ahamed1186', N'', N'1186', N'1186', N'01737210900', N'Active', N'1186@gmail.com', N'01878097487', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 191)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (191, N'Md. Rabiul Awal1187', N'', N'1187', N'1187', N'1985', N'Active', N'1187@gmail.com', N'01940900047', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 192)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (192, N'Md Masudur Rahman Molla1191', N'', N'1191', N'1191', N'1191', N'Active', N'1191@gmail.com', N'01917083534', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 193)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (193, N'RUMA RANI DAS', N'', N'1192', N'1192', N'1192', N'Active', N'1192@gmail.com', N'01683273173', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 194)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (194, N'MD.BULBUL AHAMED1193', N'', N'1193', N'1193', N'1193', N'Active', N'1193@gmail.com', N'01737528844', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 195)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (195, N'SALMA  TALUKDAR1195', N'', N'1195', N'1195', N'1195', N'Active', N'1195@gmail.com', N'01741464902', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 196)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (196, N'MST. FATEMA1212', N'', N'1212', N'1212', N'1212', N'Active', N'1212@gmail.com', N'01681133841', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 197)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (197, N'MST. DALIM BIBI1213', N'', N'1213', N'1213', N'1213', N'Active', N'1213@gmail.com', N'01681133840', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 198)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (198, N'ABDUL SAMAD MATTABUR1219', N'', N'1219', N'1219', N'1219', N'Active', N'1219@gmail.com', N'01721432432', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 199)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (199, N'TAPATI RANI MAZUMDAR1221', N'', N'1221', N'1221', N'1221', N'Active', N'1221@gmail.com', N'01759154124', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 200)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (200, N'MD. FAJLUR RAHMAN', N'', N'1223', N'1223', N'1223', N'Active', N'FAJLUR@gmail.com', N'01823429254', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 201)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (201, N'AIUB ALI ', N'', N'1222', N'1222', N'1222', N'Active', N'aiub@gmail.com', N'01977262728', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 202)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (202, N'Bhuiyan Abdur Rahman', N'', N'1001', N'arahman', N'1471967', N'Active', N'arahman@gmail.com', N'213456', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 203)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (203, N'YESMIN AKTER', N'', N'1072', N'1072', N'1072', N'Active', N'yesmin@gmail.com', N'0123456789', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 204)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (204, N'Farzana Yesmin Munni ', N'', N'1154', N'1154', N'1154', N'Active', N'munni@gmail.com', N'01731107110', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 205)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (205, N'MD. ZAHID UDDIN BHUIYAN', N'', N'1131', N'1131', N'1131', N'Active', N'md.zahid@gmail.com', N'01711112846 ', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 206)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (206, N'Erina Tonni Ranu', N'', N'1166', N'1166', N'1166', N'Active', N'erina@gmail.com', N'01910187160', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 207)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (207, N'simu1102', N'', N'1102', N'1102', N'1102', N'Active', N'simu1102@gmail.com', N'0123456789', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 208)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (208, N'MASUD PARVEZ1100', N'', N'1100', N'1100', N'1100', N'Active', N'PARVEZ1100@gmail.com', N'012345678910', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 209)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (209, N'MD .RASED SIKDER', N'', N'1228', N'rased', N'1990', N'Active', N'rased@gmail.com', N'01730187758', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 210)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (210, N'Md. Abdul Latif', N'', N'1229', N'latif', N'latif10', N'Active', N'latif@gmail.com', N'01728471227', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 211)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (211, N'sabura akter', N'', N'1157', N'sabura', N'1234', N'Active', N'sabura28012012@gmail.com', N'01710557745', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 212)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (212, N'MD. ABDUL HAQUE MIAH', N'', N'1240', N'haque', N'1234', N'Active', N'haque05011980@gmail.com', N'01712691188', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 213)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (213, N'Sheikh Farid', N'', N'1240', N'farid', N'1234', N'Active', N'farid@gmail.com', N'01710399486', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 214)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (214, N'MD. JALAL AHMED', N'', N'1241', N'181015121', N'181015121tanhar', N'Active', N'181015121@gmail.com', N'01758712513', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 215)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (215, N'M . A . MAJID', N'', N'1242', N'majid', N'0101', N'Active', N'majidhony@gmail.com', N'01915595237', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 216)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (216, N'Asraf Uddin', N'', N'1243', N'asraf', N'120207019', N'Active', N'asrafuddin770@gmail.com', N'01682085326', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 217)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (217, N'MEHEDHI HASAN', N'', N'1244', N'mehedhi', N'1986', N'Active', N'mehedhihasan71@gmail.com', N'01711117835', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 218)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (218, N'MAMUN', N'', N'1229', N'provat', N'123456', N'Active', N'provatmamun@gmail.com', N'01787815844', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 219)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (219, N'REZWAN', N'', N'1230', N'REZWAN', N'REZWAN', N'Active', N'rk01993742530@gmail.com', N'01993742530', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 220)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (220, N'alamin', N'', N'1234', N'alamin', N'916248', N'Active', N'alamin@gmail.com', N'01632729648', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 221)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (221, N'MD. Shoaibur Rahman', N'', N'1240', N'shoaibur', N'1234', N'Active', N'shoaibrahman91@gmail.com', N'01986016263', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 223)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (223, N'MD. SHAMIM AHMED', N'', N'1235', N'Shamim', N'2580', N'Active', N'shamimahmedabc@gmail.com', N'01670661616', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 224)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (224, N'Abdul Khaleq', N'', N'1234', N'Khaleq', N'1234', N'Active', N'abdulkhaleq@gmail.com', N'01925621972', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 225)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (225, N'MD. SIRAJUL ISLAM', N'', N'1236', N'Sirajul', N'1236', N'Active', N'islam1990sirajul@gmail.com', N'01673301853', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 226)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (226, N'MD. SHAKIL SHAIKH', N'', N'1232', N'Shakil', N'1232', N'Active', N'shailhshakil307@gmail.com', N'01915223945', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 227)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (227, N'SAYED AHMED PATOWARY', N'', N'1237', N'Sayed', N'4020', N'Active', N'sayed4020@gmail.com', N'01829538042', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 228)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (228, N'alim', N'', N'1270', N'alim', N'010286', N'Active', N'alim@gmail.com', N'01303038437', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 229)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (229, N'MD.ARIFUL ISLAM', N'', N'1238', N'sa shohag', N'01677885014', N'Active', N'snsshohag@gmail.com', N'01677885014', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 231)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (231, N'MD. YOUSUF ALI', N'', N'1240', N'YOUSUF', N'6964', N'Active', N'yousufalicou64@gmail.com', N'01814996964', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 232)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (232, N'MD.MAKSUD', N'', N'1241', N'MAKSUD', N'2019', N'Active', N'maksudmamun33@gmail.com', N'01716912903', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 233)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (233, N'PROSANTA ROY', N'', N'1242', N'Prosanta ', N'1234', N'Active', N'sharmin.bhsc@gmail.com', N'01870861750', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 234)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (234, N'RUBEL RANA', N'', N'1243', N'rubel', N'1234', N'Active', N'rubelrana1427@gmail.com', N'01728806514', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 235)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (235, N'MD. ZIAUDDIN BABU', N'', N'1244', N'ZIAUDDIN', N'022561', N'Active', N'ziauddin.babu90@gmail.com', N'01963008040', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2222)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2222, N'user', N' ', N'1111', N'user', N'1234', N'Active', N'FAJLUR@gmail.com', N'01823429254', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2223)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2223, N'MD. ARIFUL ISLAM', N'', N'1245', N'Arif', N'01677281467', N'Active', N'arifkhan00000@gmail.com', N'01677281467', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2224)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2224, N'MD.RASHEDUZZAMAN', N'', N'1246', N'rashed2', N'3521', N'Active', N'rashedsumon90352121@gmail.com', N'01632036509', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2225)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2225, N'SAZZAD HOSSEN', N'', N'1247', N'sazzad', N'4072032', N'Active', N'writersazzadhossen@gmail.com', N'01670761392', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2226)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2226, N'AKRAMUL HAQUE', N'', N'1248', N'akramul', N'500798081', N'Active', N'akramul4363@gmail.com', N'01684106888', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2227)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2227, N'MD. JOYNAL ABEDIN', N'', N'1249', N'joynal', N'105535', N'Active', N'joynalabedin1055@gmail.com', N'01912105535', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2228)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2228, N'Md. Sayfuddin', N'', N'1250', N'sayfuddin', N'1234', N'Active', N'sayfuddin2030@gmail.com', N'01879272814', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2229)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2229, N'MD. SAIFUL ISLAM SAKIB', N'', N'1251', N'sakib', N'97531', N'Active', N'saifulkhan385@gmail.com', N'01715411418', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2230)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2230, N'Khandaker Jewel', N'', N'1253', N'Jewel', N'1230', N'Active', N'khandakerjewel6633@gmail.com', N'01717300776', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2231)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2231, N'ABUL BASHAR', N'', N'1254', N'Bashar', N'321165', N'Active', N'a.basar1994@gmail.com', N'01515276245', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2232)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2232, N'ATIKUL ISLAM', N'', N'1256', N'ATIK', N'23bc23bc', N'Active', N'atikbobi60@gmail.com', N'01712241233', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2233)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2233, N'MST. FARIN MARIAM JOTI', N'', N'1257', N'Farin', N'5011', N'Active', N'farinmariam.kp@gmail.com', N'01303690948', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2234)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2234, N'TAHMINA AFRUZA TANIA', N'', N'1258', N'Tania', N'01936078290', N'Active', N'tahminasarwar@gmail.com', N'01936078290', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2235)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2235, N'ISRAT JAHAN PANNA', N'', N'1259', N'Panna', N'01581715670', N'Active', N'isratbinte889@gmail.com', N'01581715670', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2236)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2236, N'ABDULLAH AL-MAMUN', N'', N'1260', N'MAMUN', N'1985', N'Active', N'almamun271285@gmail.com', N'01754193032', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2237)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2237, N'MD. MAHABUL ALAM (2)', N'', N'1261', N'MUSTAJAB', N'MUSTAJAB', N'Active', N'1994mahabulalam@gmail.com', N'01770403062', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2238)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2238, N'MEHEDI HASAN', N'', N'1261', N'Hasan', N'Hasan', N'Active', N'mehedi.hasan3394@gmail.com', N'01869637908', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2239)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2239, N'MAHFOJUL HOQUE', N'', N'1263', N'RAIYAN', N'mahfoj92', N'Active', N'mahfoj92@gmail.com', N'01722006566', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2240)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2240, N'NUROL AMIN', N'', N'1264', N'AIMON', N'195064', N'Active', N'nurolamin113@gmail.com', N'01813195064', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2241)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2241, N'FAHIM AHMED FOYSAL', N'', N'1265', N'FAHIM', N'@18051994@', N'Active', N'fahimfoysal1994@gmail.com', N'01580847620', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2242)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2242, N'MD. BULBUL AHMED', N'', N'1266', N'RAHMAN', N'212058', N'Active', N'ahamedbulbul309@gmail.com', N'01924476479', NULL, N'', N'');
IF NOT EXISTS (SELECT 1 FROM tblUser WHERE UserId = 2243)
    INSERT INTO tblUser (UserId, UserName, UserType, EmpMasterCode, LoginName, Password, UserStatus, Email, ContactNo, SchoolId, SchoolCode, SchoolName)
    VALUES (2243, N'MD Nazrul Islam (Super Admin)', N'SuperAdmin', N'', N'superadmin', N'Admin@123', N'active', N'superadmin@bornomala.edu.bd', N'+880 1760 150555', NULL, N'', N'Main Campus (Dania)');