import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  mobile =[
    {'title':'SAMSUNG','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'NOKIA','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'OPPO','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'VIVO','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'REDMI','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'SAMSUNG','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'SAMSUNG','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'SAMSUNG','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'SAMSUNG','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
    {'title':'SAMSUNG','model':'GALAXY M31','description':'Samsung Galaxy M31 white quad cam with 8gb ram 128gbinternal memory','price':'16,800'},
  ];
  laptop =[
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},
    {'title':'HP G031','processor':'INTEL I3','description':'HP LAPTOP with intel 13 core processor with 8gbram and 256gb ssd ','price':'36,800'},

  ];
  acessories =[
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
    {'title':'BOAT HEPOSN','ITEM':'Eared bluetooth headphone','description':'BOAT bluetooth headphone with ultra bass having 4hour standby with sweat resistant','price':'699'},
  ];
  electronics =[
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
    {'title':'SAMSUNG FRIDGE','ITEM':'fridge','description':'Samsung double door 180l fast freeze fridge with ultra power saving capacity running even in home inverter','price':'13,699'},
  ];
  fashion=[
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
    {'title':'OTTO MENS CASUAl','ITEM':'cotton lower','description':'otto mens casual cotton lower full fabrictaed stitching anonymously in variety of colors','price':'199'},
  ];
  grocery=[
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
    {'title':'ASHIRWAD ATTA','quantity':'5KG','description':'Ashirwad multigrain atta with no added sugar in discount','price':'233'},
  ]

  constructor() { }
  //mobile
  getMobile(){
    return this.mobile;
  }
  //laptop
  getLaptop(){
    return this.laptop;
  }
  //electronics
  getAccesspries(){
    return this.acessories;
  }
  //accessories
  getElectronics(){
    return this.electronics;
  }
  //fashion
  getFashion(){
    return this.fashion;
  }
  //grocery
  getGrocery(){
    return this.grocery;
  }
}
