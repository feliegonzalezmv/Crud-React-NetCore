using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DCompany
    {


        [Key]
        [Column(TypeName = "nvarchar(30)")]
        public string identification { get; set; }

        [Column(TypeName = "nvarchar(30)")]
        public string identificationType { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string companyName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string firstName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string secondName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string firstLastName { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string secondLastName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }


        [Column(TypeName = "bit")]
        public bool autorizeSendMessagesCellphone { get; set; }

        [Column(TypeName = "bit")]
        public bool autorizeSendMessagesEmail { get; set; }
     

    }
}