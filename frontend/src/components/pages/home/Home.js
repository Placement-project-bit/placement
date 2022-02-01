import React from "react";
import image from '../images/2ndiamge.jpg';
import rec from '../images/OurRecruiters.jpg';
import { useState } from "react";
import MetaData from "../../MetaData";
import { Link } from "react-router-dom";
import jquery from "jquery";
import './Home.css'


function Home() {

  const [show, MandVShow] = useState(false)
  const [showobj, ObjShow] = useState(false)
  const [showproc, ProcShow] = useState(false)

   return (
   <>
   <MetaData title="Bit Placement" />
   <div className="college">
   <img src={image} alt="" />
   <div className="caption"><div>Bangalore Institute Of<br />Technology<div>Placements</div></div></div>
  </div>
    
    <div className="about">
    <h1><strong>DEPARTMENT OF <br />TRAINING AND PLACEMENT CELL</strong></h1><div className="head"></div>
    <p>
    Training and Placement Center was established in the year 1994 under the visionary leadership of Dr.Aswath.M.U, 
    with the objective of making our students self-reliant, capable, skilled and competent technocrats. Many milestones have been set by our center.
    </p>
    <p>
    To keep our students professionally updated to the unfolding dynamic environment, our center offers apex quality training services, 
    many career guidance and development programmes on personality development, communication skills, Industry to Institute Convergence expert 
    interaction sessions, aptitude tests and logical reasoning sessions, confidence grooming sessions, Group Discussion and Mock Interview Sessions, 
    Public Sector Competitive Exams Training and Industry Internship Programs. Due to which our students are well equipped to handle the working norms of the industry.
    </p>
    <p>
    The Center provides employment opportunities for the students in acclaimed world class organisations. 
    Every year more than 100 top notch companies visit our Institution and conduct placement activities for the full time recruitment and internship. 
    The Training and Placement Centre takes immense pleasure in stating that around 70 percent of eligible students are placed in their dream companies 
    with attractive packages. The average compensation is 6.5 lacs and highest compensation will be 20 LPA. Leading companies like Infosys, Wipro, 
    Accenture, Cisco, Akamai, Microfocus, HPE, SAP, Nokia, Microchip, BEL, Mercedes Benz, Bosch, L&T- ECC and Brigade Group recruit our students.
    </p>
    <p>
    Our resourceful alumnae have set commendable standards in the corporate world through their admirable contributions. 
    The consistent placement record illustrates our commitment and devotion towards creating employment opportunities to our students.
    </p>
    <p>
    We have excellent infrastructure facilities in terms of full-fledged seminar hall, training hall, 
    conference and board rooms, interview cabins, full-fledged computer labs for conducting recruitment process.
    </p>
  </div>
       
  <div className="parts">
    <button onClick={()=>MandVShow(!show)}><h2>MISSION AND VISION</h2></button>
    {
      show?<>
      <h3>Vision</h3>
      <div>
      To enhance and equip our students with the conceptualized employability and professional
       skills in meeting the dynamic challenges of the corporate world and acquaint our faculty members with current industrial trends.
      </div>
      <h3>Mission</h3>
      <div>
        - To train the students to meet the industry requirements.<br />
        @ To guide the students to achieve their career goals.<br />
        @ To provide ample placement opportunities for the students to get their dream jobs.<br />
        @ To equip our faculty members with the latest industry requisites.<br />
      </div>
      </>:null
    }
    <button onClick={()=>ObjShow(!showobj)}><h2>OBJECTIVES</h2></button>
    {
      showobj?
    <div>
      @  To enhance industry-institute interaction.<br />
      @  To organize seminar, training programmes and work-shops for students so as to  help students to learn latest technologies.<br />
      @  To organize seminars, technical talks by eminent   personalities from academic institutes and industry to enhance the awareness of students.<br />
      @  To provide guidance and information for higher studies.<br />
      @  To conduct mock tests, interviews, Group Discussions for students.<br />
      @  To conduct training programs to enhance the communication skills and develop inter-personal skills of students.<br />
      @  To arrange campus-interviews by inviting leading companies to recruit students.<br />
    </div>:null
    }

    <button onClick={()=>ProcShow(!showproc)}><h2>PLACEMENT PROCESS</h2></button>
    {
      showproc?
    <div>
      @  Every year the enrollment process for placements begins when students come to pre final year.<br />
      @  Each department will have one faculty and two student coordinators to facilitate training and placement activities.<br />
      @  The coordinators organize mock test and group discussion in their respective classes. External trainers are 
      invited to train the students on solving the aptitude, prepare for group discussion, interview facing skills and technical skills. 
      Experts from the varied industries are invited to give guest lecture on the latest technologies.<br />
      @  Every year more than three hundred reputed companies are invited to visit our institution to recruit our students for 
      internship and full time jobs.<br />
      @  Several companies send their assessment form to assess our institute before they visit for recruitment. 
      We provide all the required information to the companies. Based on the information provided, companies visit our institution 
      for campus recruitment.<br />
      @  More than one hundred and twenty companies from different sectors visit BIT to recruit students for internship and full-time job. 
      More than five hundred students get their dream jobs through placement center.<br />
    </div>:null
    }
  <br />
  <br />
  </div>

  <div className="rec">
  <h2>OUR RECRUITERS</h2>
  <img src={rec} alt="" />
  <p>And many more...</p>
  </div>

      <div className="extra">
      <div className="info">
        <h1>COMPANIES VISIT BIT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Hic iste facilis corporis expedita est odit consequatur tempore officiis totam unde.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos nihil, assumenda voluptas earum eum! Numquam architec
            possimus doloribus odit, ullam vero ab illo laudantium saepe distinctio porro voluptatum rem?</p>

      </div>
       <div className="info" >
        <h1>ABOUT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Hic iste facilis corporis expedita est odit consequatur tempore officiis totam unde.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos nihil, assumenda voluptas earum eum! Numquam architec
            possimus doloribus odit, ullam vero ab illo laudantium saepe distinctio porro voluptatum rem?</p>
                 

      </div>
       <div className="info" >
        <h1>QUICK LINKS</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Hic iste facilis corporis expedita est odit consequatur tempore officiis totam unde.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eos nihil, assumenda voluptas earum eum! Numquam architec
            possimus doloribus odit, ullam vero ab illo laudantium saepe distinctio porro voluptatum rem?</p>


      </div>
    </div>
    
    </>
  );
}

export default Home;