﻿namespace BookMyShow.ViewModel
{
    public class SeatViewModel
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public bool Status { get; set; }
        public int ShowId { get; set; }
        public int TheatreId { get; set; }
        public int MovieId { get; set; }
        public int TicketId { get; set; }
    }
}
