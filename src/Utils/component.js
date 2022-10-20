export const component = (homeData)=>{
    let temp = [] 
    homeData.forEach((element)=>{
      switch(element.__component)
      {
        case 'home.banner':
          return temp[0] = element;
        case 'home.services':
          return temp[1] = element;
        case 'home.about':
          return temp[2] = element;
        case 'home.contact':
          return temp[3] = element;
        default: return temp;
      }
    })
    return temp;
  }

  