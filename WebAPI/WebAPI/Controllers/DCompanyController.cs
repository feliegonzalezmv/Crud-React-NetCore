using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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


        [HttpPost(Name = "UpdateCompany")]
        public async Task<IActionResult> UpdateCompany([FromBody] DCompany dCompany)
        {


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(dCompany == null)
            {
                return BadRequest(new Response { Status = false, Message = "No fue posible realizar la actualización" });
            }

            _context.Entry(dCompany).State = EntityState.Modified;
            await _context.SaveChangesAsync();


            return Ok(new Response { Status = true, Message = "Se actualizo la información correctamente" });

        }


    }
}
