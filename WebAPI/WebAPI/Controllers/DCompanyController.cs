using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{


    [Route("api/[controller]")]
    [ApiController]
    public class DCompanyController : ControllerBase
    {
        private readonly CompaniesDBContext _context;

        public DCompanyController(CompaniesDBContext context)
        {
            _context = context;
        }


        [HttpGet("{id}")]
        public async Task<ActionResult> GetValidCompany([FromRoute] int id)
        {
            var dCompany = await _context.DCompany.FindAsync(id.ToString());

            if (!ModelState.IsValid)
            {
                return BadRequest();
            } 

            if (dCompany == null)
            {
                return NotFound("La identificación de la empresa no está registrada");
            }

            return Ok(dCompany);
        }

    }
}
