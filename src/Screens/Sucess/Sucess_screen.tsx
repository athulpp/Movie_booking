import { Grid, Typography } from '@mui/material';
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../../Common/Header';
import image1 from '../../Assests/image/animation_lnegru2a_small.gif';
import './sucess.scss'
import { useNavigate } from "react-router-dom";
import ButtonComp from '../../Common/Input/Button';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
const Sucess_screen = () => {
    const navigate=useNavigate();
    const bookList = useSelector((state:any) => state?.bookedList);
    const currentBookedList=useSelector((state:any)=>state?.form?.movie);
    const bookedSeats=useSelector((state:any)=>state?.form.booked); 
    console.log(bookList,'bookList1111111111111111');
    const downloadPdf = () => {
        let save:any=saveAs
        // Create a new jsPDF instance
        const width = 85; // 85mm for width
const height = 55; // 55mm for height

        const doc = new jsPDF({
          orientation: 'portrait', // 'portrait' or 'landscape'
          unit: 'mm', // units of measurement: 'mm', 'cm', 'in', 'px'
          format: [width, height], // specify the custom width and height for your page
        });
    const seatNumber=bookedSeats.seats.map((item:any)=>{
return item.seatNumber.toString()
    });
    const seatNumbers:string=String(seatNumber);
        // const movieName: string = String(bookList.dataMap.movie);
        doc.setFontSize(12);
        doc.text("Bill",25,5);
        doc.text("Cinema Gate",15,10);
        doc.setFontSize(7);
        doc.text("Movie:",10,20);
        doc.text(currentBookedList.title, 20, 20);
        doc.text("Genre:",10,30);
        doc.text(currentBookedList.genre,20,30);
        doc.text("Seat No:",10,40);
        doc.text(seatNumbers,20,40);
        doc.text("Ticket Price:",10,50);
        doc.text(bookedSeats.ticketPrice.toString(),25,50);
        doc.text('Tax:',10,60);
        doc.text(bookedSeats.tax.toString(),15,60);
        doc.text('Total:',10,70);
        doc.text(bookedSeats.totalCharge.toString(),20,70);
        doc.text('Thank You!',20,80);
        const pdfBlob = doc.output('blob');
    
        // Create a file name for the PDF
        const fileName = 'ticketBill.pdf';
    
        // Use the saveAs function from file-saver to trigger the download
        save(pdfBlob, fileName);
      };
     
  return (
    <div>
        <Grid>
            <Header/>
            <Grid className='content-height'></Grid>
            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
                <Grid item xs={12} className='success_center'>
                    
                  <Typography variant='h4'>Success Your Ticket has been booked!</Typography> 
                  <img src={image1}/> 
                  <Grid className="content-row" justifyContent={'center'}>
                    <ButtonComp
                    buttonName={"Home"}
                    onClick={()=>navigate('/home')}
                    type="submit"
                    variant='contained'
                    customStyle={{backgroundColor:'red',color:'white'}}
                    /> 
                    <ButtonComp
                    buttonName={"Home"}
                    onClick={()=>downloadPdf()}
                    type="submit"
                    variant='contained'
                    customStyle={{backgroundColor:'yellow',color:'white'}}
                    /> 
                  </Grid>
                </Grid>
            </Grid>

        </Grid>
    </div>
  )
}

export default Sucess_screen