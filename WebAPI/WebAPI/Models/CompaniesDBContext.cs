using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class CompaniesDBContext : DbContext 
    {

        public CompaniesDBContext(DbContextOptions<CompaniesDBContext> options):base(options)
        {

         
        }


        public DbSet<DCompany> DCompany { get; set; }

        public DbSet<DValidCompany> DValidCompany { get; set; }


    }
}
