export interface feature {
    id: number;
    name:string;
    description: string;
    url: string;
  }
  
  export const features: feature[] = [
    { id: 1, name: 'Sticky Notes', description: 'Notes to write on the fly', url: '/stickyNotes.jpg'}, 
    { id: 2, name: 'Calender', description: 'Manage your family schedule', url: '/calendar.jpg'},
    { id: 3, name: 'Lists', description: 'Manage your lists', url: '/lists.jpg'},
    { id: 4, name: 'Photos', description: 'Manage your collection of photos', url: '/photos.jpg'},   
  ];
