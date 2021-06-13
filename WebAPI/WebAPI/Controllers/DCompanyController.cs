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

            try
            {
                var dCompany = await _context.DCompany.FindAsync(id.ToString());

                if (!ModelState.IsValid)
                {
                    return BadRequest(new Response { Status = false, Message = "Ups, ocurrio un error" });
                }

                if (dCompany == null)
                {
                    return NotFound(new Response { Status = false, Message = "La identificación de la empresa no se encuentra registrada" });
                }

                return Ok(dCompany);
            }
            catch (Exception)
            {

                return NotFound(new Response { Status = false, Message = "Ups, ocurrio un error" });
            }

           
        }


        [HttpPost(Name = "UpdateCompany")]
        public async Task<IActionResult> UpdateCompany([FromBody] DCompany dCompany)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new Response { Status = false, Message = "Ups, ocurrio un error" });
                }

                if (dCompany == null)
                {
                    return NotFound(new Response { Status = false, Message = "No fue posible realizar la actualización" });
                }

                _context.Entry(dCompany).State = EntityState.Modified;
                await _context.SaveChangesAsync();


                return Ok(new Response { Status = true, Message = "Se actualizo la información correctamente" });
            }
            catch (Exception)
            {

                return BadRequest(new Response { Status = false, Message = "Ups, ocurrió un error inesperado"   });
            }

          

        }


    }
}
