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
    public class DValidCompaniesController : ControllerBase
    {
 
        private readonly CompaniesDBContext _context;
        public DValidCompaniesController(CompaniesDBContext context)
        {
            _context = context;
        }


        [HttpGet("{id}")]

        public async Task<ActionResult> GetValidCompany([FromRoute] int id)
        {
            var dValidCompany = await _context.DValidCompany.FindAsync(id.ToString());

            if (!ModelState.IsValid)
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
