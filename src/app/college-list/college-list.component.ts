import { Component } from '@angular/core';
import { Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-college-list',
  templateUrl: './college-list.component.html',
  styleUrls: ['./college-list.component.css']
})
export class CollegeListComponent {
  @Input('name') public name:any;
  @Input() public city:string = '';
  @Output() public collegeList = new EventEmitter();
  colleges:any;
  

  ngOnChanges(){

  if (this.city == "Chennai")
  {
      this.colleges = [

        {
                Name : "IIT Madras - Indian Institute of Technology"
              
              },
              {
                Name : "SRM Institute of Science and Technology"
                
              },
              {
                Name : "Anna University"
               
              },
              {
                Name : "SSN College of Engineering"
               
              },
              {
                Name : "Guru Nanak College"
               
              }      

      ];

      this.collegeList.emit(this.colleges);  
  }
  if (this.city == "Mumbai")
  {
      this.colleges = [

        {
                Name : "Bhavan's College of Arts, Science and Commerce, Andheri West"
              
              },
              {
                Name : "Bunts Sangha's S.M.Shetty College of Science, Commerce and Management Studies, Powai"
                
              },
              {
                Name : "B. K. Birla College of Arts, Science and Commerce,Kalyan"
               
              },
              {
                Name : "Seth N.K.T.T College of commerce arts and science, kharkaralii road Thane West"
               
              },
                 

      ];

      this.collegeList.emit(this.colleges);  
  }
  if (this.city == "Pune")
  {
      this.colleges = [

        {
                Name : "Rajiv Gandhi College of Arts,Commerce & Science Vashi"
              
              },
              {
                Name : "SRM Institute of Science and Technology"
                
              },
              {
                Name : "Anna University"
               
              },
              {
                Name : "SSN College of Engineering"
               
              },
              {
                Name : "Guru Nanak College"
               
              }      

      ];

      this.collegeList.emit(this.colleges);  
  }
  if (this.city == "Kolkata")
  {
      this.colleges = [

        {
                Name : "ICE College of Hotel Management and Catering Technology, Andheri"
              },
              {
                Name : "SRM Institute of Science and Technology"
                
              },
              {
                Name : "Anna University"
               
              },
              {
                Name : "SSN College of Engineering"
               
              },
              {
                Name : "Guru Nanak College"
               
              }      

      ];

      this.collegeList.emit(this.colleges);  
  }


  }
  
}
