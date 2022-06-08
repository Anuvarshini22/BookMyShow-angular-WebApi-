namespace BookMyShow.Entities
{
    public class Seat
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public bool Status { get; set; }
        public int ShowId { get; set; }
        public int TheatreId { get; set; }
        public int MovieId { get; set; } 
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }
        public string DeletedDate { get; set; }
        public bool IsDeleted { get; set; }
    }
}
