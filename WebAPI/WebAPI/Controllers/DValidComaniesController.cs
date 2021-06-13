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

            try
            {
                var dValidCompany = await _context.DValidCompany.FindAsync(id.ToString());

                if (!ModelState.IsValid)
                {
                    return BadRequest(new Response { Status = false, Message = "Compañia no valida" });
                }

                if (dValidCompany == null)
                {
                    return NotFound(new Response { Status = false, Message = "La identificación de la empresa no se encuentra registrada" });
                }

                return Ok(dValidCompany);
            }
            catch (Exception)
            {
                return BadRequest(new Response { Status = false, Message = "Compañia no valida" });
               
            }
        }
    }
}
