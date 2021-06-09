using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class DValidCompany
    {


        [Key]
        [Column(TypeName = "nvarchar(30)")]
        public string identification { get; set; }


        [Column(TypeName = "nvarchar(100)")]
        public string companyName { get; set; }




    }
}
