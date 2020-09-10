using System;
using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        public UserForRegisterDto()
        {
            Created = DateTime.Now;
            LastSeen = DateTime.Now;
        }
        [Required]
        public string Username { get; set; }
        [Required]
        [StringLength(8, MinimumLength = 3, ErrorMessage = "Bad password")]
        public string Password { get; set; }
        [Required]

        public string Gender { get; set; }
        [Required]

        public DateTime DateOfBirth { get; set; }
        [Required]
        public string KnownAs { get; set; }

        [Required]
        public string City { get; set; }
        [Required]

        public string Country { get; set; }
        public DateTime Created { get; set; }
        public DateTime LastSeen { get; set; }
    }
}