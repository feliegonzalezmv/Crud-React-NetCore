using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class DValidCompanies : ControllerBase
    {
 
        private readonly CompaniesDBContext _context;
        public DValidCompanies(CompaniesDBContext context)
        {
            _context = context;
        }


        [HttpGet("{id}")]

        public async Task<ActionResult<DValidCompany>> GetCompany(int id)
        {
            var dValidCompany = await _context.DValidCompany.FindAsync(id);

            if (ModelState.IsValid)
            {
                return BadRequest();
            }

            if (dValidCompany == null)
            {
                return NotFound("La identificación de la empresa no está registrada");
            }

            return Ok(dValidCompany);
        }

    }
}
