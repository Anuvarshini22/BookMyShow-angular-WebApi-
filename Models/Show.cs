﻿namespace BookMyShow.Entities
{
    public class Show
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public int TheatreId { get; set; }
        public int MovieId { get; set; }
        public int Capacity { get; set; }
        public int SeatsAvailable{get;set;}
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }
        public string DeletedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
