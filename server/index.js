const express=require("express");
const app=express();
const mysql=require('mysql');
const cors=require('cors');
const nodemailer = require('nodemailer');
const dotenv=require('dotenv');
dotenv.config();
app.use(cors());
app.use(express.json());
const transport=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.USER,
        pass:process.env.PASS
    }
});
const db = mysql.createConnection(
    {
        user:"root",
        host: "127.0.0.1",
        password: "password",
        database: "dbms_project",
        port: 3306,
    }
)
app.post('/forgotpassword', (req,res)=>{
    const email=req.body.email;
    const code=req.body.code;
    db.query("SELECT * FROM CUST_DETAILS WHERE EMAIL_ID=?",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            if(result.length==1)
            {
                  
                  var mailOptions = {
                    from: 'student.mail.karthik@gmail.com',
                    to: email,
                    subject: 'OTP Verification for Forget Password',
                    html: `<h1>${code}<h1>`
                  };
                  
                  transport.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
            }
            else{
                res.send("Wrong");
            }
        }
    });
})
app.post('/addcomments', (req,res)=>{
    const email=req.body.email;
    const ID=req.body.id;
    const comments=req.body.comments;
    const ratings=req.body.ratings;
    db.query("SELECT * FROM CUST_COMMENTS WHERE EMAIL_ID=? AND ID=?",
    [email,ID],
    (err,result)=>{
        if(err)
        {
            console.log(err);
            res.send("Failure");
        }
        else{
            if(result.length==0)
            {
                db.query("INSERT INTO CUST_COMMENTS VALUES(?,?,?,?)",
                [ID,email,comments,ratings],
                (err,result)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        res.send("Success");
                    }
                });
            }
            else
            {
                db.query("UPDATE CUST_COMMENTS SET COMMENTS=?,RATINGS=? WHERE EMAIL_ID=? AND ID=?",
                [comments,ratings,email,ID],
                (err,result)=>{
                    if(err)
                    {
                        console.log(err);
                    }
                    else{
                        res.send("Changed");
                    }
                });
            }
        }
    });
})
app.post('/changepasswordemail', (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.query("UPDATE CUST_DETAILS SET PASSWORD=? WHERE EMAIL_ID=?",
    [password,email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("SUCCESS");
        }
    });
})
app.post('/commentsdisplay', (req,res)=>{
    const ID=req.body.ID;
    db.query("SELECT COMMENTS,RATINGS,NAME FROM CUST_DETAILS,CUST_COMMENTS WHERE ID=? AND CUST_DETAILS.EMAIL_ID=CUST_COMMENTS.EMAIL_ID",
    [ID],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/displaybookinghistory', (req,res)=>{
    const email=req.body.email;
    db.query("SELECT * FROM BOOKING_DETAILS,HOTEL_DETAILS WHERE EMAIL_ID=? AND HOTEL_DETAILS.ID=BOOKING_DETAILS.ID",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/hotelsarea', (req,res)=>{
    const city=req.body.city;
    db.query("SELECT DISTINCT AREA FROM HOTEL_DETAILS WHERE CITY=?",
    [city],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/searchfilter', (req,res)=>{
    const city = req.body.city;
    const indate=req.body.indate;
    const outdate=req.body.outdate;
    const areas=req.body.areas;
    const sortoption=req.body.sortOption;
    let str1;
    if(areas.length>0)
    {
        let str2="";
        for(i=0;i<areas.length;i++)
        {
            if(i==areas.length-1)
            {
                str2=str2+"'";
                str2=str2+areas[i];
                str2=str2+"'";
            }
            else{
                str2=str2+"'";
                str2=str2+areas[i];
                str2=str2+"'";
                str2=str2+',';
            }
        }
        str1=`AND AREA IN (${str2})`
    }
    else
    {
        str1=``;
    }
    const wifi=req.body.wifi;
    const ac=req.body.ac;
    const swim=req.body.swim;
    let str2;
    if(wifi==1&&ac==1&&swim==1)
    {
        str2=``;
    }
    else
    {
        str2=``;
        if(wifi==1)
        {
            str2=str2+` AND WIFI=1 `;
        }
        if(swim==1)
        {
            str2=str2+` AND SWIM=1 `;
        }
        if(ac==1)
        {
            str2=str2+` AND AC=1 `
        }

    }
    db.query(`SELECT MIN(AVA) AS MIN_ROOMS,HOTEL_ID,PRICE,NAME,CITY,AREA,RATINGS,PHNO,PRICE,SWIM,AC,WIFI FROM ROOM_AVA,HOTEL_DETAILS,HOTEL_EXTRA_DETAILS WHERE HOTEL_DETAILS.ID=HOTEL_EXTRA_DETAILS.ID AND HOTEL_ID=HOTEL_DETAILS.ID AND HOTEL_ID=HOTEL_EXTRA_DETAILS.ID AND LOWER(CITY)='${city}' AND DATE>='${indate}' AND DATE<='${outdate}' ${str1} ${str2} GROUP BY HOTEL_ID ${sortoption}`,
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/hotels', (req,res)=>{
    const city = req.body.city;
    const indate=req.body.indate;
    const outdate=req.body.outdate;
    db.query("SELECT MIN(AVA) AS MIN_ROOMS,HOTEL_ID,PRICE,NAME,CITY,AREA,PHNO,PRICE,SWIM,AC,WIFI,RATINGS FROM ROOM_AVA,HOTEL_DETAILS,HOTEL_EXTRA_DETAILS WHERE HOTEL_DETAILS.ID=HOTEL_EXTRA_DETAILS.ID AND HOTEL_ID=HOTEL_DETAILS.ID AND LOWER(CITY)=? AND DATE>=? AND DATE<=? GROUP BY HOTEL_ID",
    [city,indate,outdate],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/hotelsmore', (req,res)=>{
    const ID = req.body.ID;
    db.query("SELECT * FROM HOTEL_DETAILS,HOTEL_EXTRA_DETAILS WHERE HOTEL_DETAILS.ID=HOTEL_EXTRA_DETAILS.ID AND HOTEL_DETAILS.ID=?",
    [ID],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/signup', (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    const phno=req.body.phno;
    db.query("INSERT INTO CUST_DETAILS VALUES (?,?,?,?)",
    [email,phno,name,password],
    (err,result)=>{
        if(err)
        {
            console.log(err);
            res.send("Unsuccessful");
        }
        else{
            res.send("Successful");
        }
    });
})
app.post('/payathotel', (req,res)=>{
    const email=req.body.email;
    const ID=req.body.ID;
    const indate=req.body.indate;
    const outdate=req.body.outdate;
    const id=req.body.id;
    const rooms=req.body.rooms;
    const name=req.body.name;
    const hotelname=req.body.hotelname;
    const price=req.body.price;
    db.query("INSERT INTO BOOKING_DETAILS VALUES (?,?,?,?,?,?,?,?)",
    [ID,email,"AT HOTEL",1,0,indate,outdate,rooms],
    (err,result)=>{
        if(err)
        {
            console.log(err);
            res.send("Unsuccessful");
        }
        else{
            var mailOptions = {
                from: 'student.mail.karthik@gmail.com',
                to: email,
                subject: 'Booking details',
                html: `<h1>Your Name : ${name}</h1><h1>${hotelname}</h1><h1>
                ${rooms*price}</h1><h1>${indate}</h1><h1>${outdate}<h1>
                <h1>Pay at hotel`
              };
              
              transport.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.send("Successful");
        }
    });
})
app.post('/paynow', (req,res)=>{
    const email=req.body.email;
    const ID=req.body.ID;
    const indate=req.body.indate;
    const outdate=req.body.outdate;
    const id=req.body.id;
    const rooms=req.body.rooms;
    const name=req.body.name;
    const hotelname=req.body.hotelname;
    const price=req.body.price;
    const cvc=req.body.cvc;
    const expirydate=req.body.expirydate;
    const cardno=req.body.cardno;
    const carddetails=req.body.carddetails;
    db.query("INSERT INTO BOOKING_DETAILS VALUES (?,?,?,?,?,?,?,?)",
    [ID,email,id,0,cardno,indate,outdate,rooms],
    (err,result)=>{
        if(err)
        {
            console.log(err);
            res.send("Unsuccessful");
        }
        else{
            db.query("INSERT INTO CARD_DETAILS VALUES (?,?,?,?,?)",
            [cardno,email,cvc,expirydate,carddetails],
    (err,result)=>{
        if(err)
        {
            console.log(err);
            res.send("Unsuccessful");
        }
        else{
            var mailOptions = {
                from: 'student.mail.karthik@gmail.com',
                to: email,
                subject: 'Booking details',
                html: `<h1>${name}</h1><h1>${hotelname}</h1><h1>
                ${rooms*price}</h1><h1>${indate}</h1><h1>${outdate}<h1>
                <h1>Transcation Id ${id}`
              };
              
              transport.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
            res.send("Successful");
        }
    });
            
        }
    });
})
app.post('/custlogin', (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    db.query("SELECT * FROM CUST_DETAILS WHERE EMAIL_ID=? AND PASSWORD=?",
    [email,password],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/adminhoteldetails', (req,res)=>{
    const email=req.body.email;
    db.query("SELECT * FROM HOTEL_DETAILS,HOTEL_EXTRA_DETAILS,LOGIN_HOTEL WHERE EMAIL_ID=? AND HOTEL_DETAILS.ID=HOTEL_EXTRA_DETAILS.ID AND HOTEL_DETAILS.ID=LOGIN_HOTEL.ID",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/admincustcancel', (req,res)=>{
    const email=req.body.email;
    db.query("SELECT DISTINCT reason FROM LOGIN_HOTEL,CANCEL_REASONS WHERE LOGIN_HOTEL.EMAIL_ID=? AND LOGIN_HOTEL.ID=CANCEL_REASONS.ID",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/admincustcomments', (req,res)=>{
    const email=req.body.email;
    db.query("SELECT * FROM LOGIN_HOTEL,CUST_COMMENTS,CUST_DETAILS WHERE LOGIN_HOTEL.EMAIL_ID=? AND LOGIN_HOTEL.ID=CUST_COMMENTS.ID AND CUST_DETAILS.EMAIL_ID=CUST_COMMENTS.EMAIL_ID",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/admincustbooking', (req,res)=>{
    const email=req.body.email;
    db.query("SELECT * FROM LOGIN_HOTEL,BOOKING_DETAILS WHERE LOGIN_HOTEL.EMAIL_ID=? AND BOOKING_DETAILS.ID=LOGIN_HOTEL.ID",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send(result);
        }
    });
})
app.post('/hotellogin', (req,res)=>{
    const email=req.body.email;
    const code=req.body.code;
    db.query("CALL PROCEDURE2(?);",
    [email],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            var mailOptions = {
                from: 'student.mail.karthik@gmail.com',
                to: email,
                subject: 'Code Hotel',
                html: `<h1>${code}</h1>`
              };
              
              transport.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
              res.send("Success");
        }
    });
})
app.post('/cancelhotel', (req,res)=>{
    const email=req.body.email;
    const ID=req.body.ID;
    const option=req.body.option;
    db.query("DELETE FROM BOOKING_DETAILS WHERE EMAIL_ID=? AND ID=?",
    [email,ID],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            db.query("INSERT INTO CANCEL_REASONS VALUES (?,?,?)",
            [ID,email,option],
            (err,result)=>{
                if(err)
                {
                    console.log(err);
                    res.send("Unsuccessful");
                }
                else{
                    res.send("Success");
                }
            });
        }
    });
})
app.post('/changepassword', (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const newpassword=req.body.newpassword;
    db.query("UPDATE CUST_DETAILS SET PASSWORD=? WHERE EMAIL_ID=? AND PASSWORD=?",
    [newpassword,email,password],
    (err,result)=>{
        if(err)
        {
            console.log(err);
        }
        else{
            res.send("Success");
        }
    });
})
app.listen(3001,()=>{
    console.log("Server is running");
})
db.connect((err)=>{
    if(err)
    {
        throw err;
    }
    console.log("MySQL Connected");
})