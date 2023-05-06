use master;
go
create database BigBang
go
use BigBang
go
------------------------------用户表-----------------------------------
create table UserInfo 
(
   UserID int primary key,
   UserSex bit not null,
   UserAge int,
   UserHobby varchar(500),
   UserBirthday datetime,
   UserImage varchar(20),
   VipUserID int not null
)
go
create table LoginRecord
(
	UserID int primary key,
	LoginTime datetime not null,
	IsManager bit not null
)
go
create table VipUser(
	VipUserID int primary key identity,
	VipUserName varchar(20)
)
go
----------------------------管理员表-----------------------------------
create table ManagerInfo(
	ManagerID int primary key identity(10000,1),
	ManagerPassWord varchar(20) not null
)
go
------------------------------数据表-------------------------------------
--文章
create table ArticleInfo(
    ArticleID varchar(20) primary key,
	ArticleContext varchar(max),
	UserID int not null,
	CreateDate datetime
)
go
--数据类型表
create table DataTypeInfo(
	DataTypeId int primary key,
	DataName varchar(30),
	DataTableName varchar(30)
)
go
--游戏
create table GamesInfo(
	GamesID varchar(20) primary key identity,
	GamesName varchar(20) not null,
	GamesPath varchar(50) not null,
	GamesContext varchar(max),
)
go
--音乐
create table MusicInfo(
	MusicID varchar(20) primary key,
	MusicName varchar(20) not null,
	MusicPath varchar(50) not null,
	MusicContext varchar(max)
)
go
--日常
create table DayInfo(
	DayInfoID varchar(20) primary key,
	CreateTime datetime not null,
	DayInfoContext varchar(max)
)
go
--评论表
create table CommentInfo
(
	UserID int primary key,
	DatasID varchar(20),
    DataTypeID int,
	CreateTime datetime not null,
)
--------------------------------数据表--------------------------------------
go
--------------------------------关系表--------------------------------------
create table RelationInfo(
	ManagerID int,
	UserID int,
	RelationID int
)
go
create table Relation(
	RelationID int primary key identity,
	RelationName varchar(20)
)
go
--------------------------------关系表--------------------------------------



-------------------------------数据推送表-----------------------------------
create table 





-------------------------------数据推送表------------------------------------
