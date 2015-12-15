using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Converter.Api.Controllers
{
    public class TemperatureController : ApiController
    {
        // POST api/temperature/fahrenheittocelsius
        [HttpGet]
        [Route("api/temperature/fahrenheittocelsius/{fahrenheit:decimal}")]
        public HttpResponseMessage ConvertFahrenheitToCelsius(decimal fahrenheit)
        {
            decimal celsius;
            try
            {
                celsius = ((fahrenheit - 32) * 5) / 9;
                return this.Request.CreateResponse<decimal>(HttpStatusCode.OK, celsius);
            }
            catch (Exception)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.InternalServerError));
            }
        }

        // POST api/temperature/celsiustofahrenheit
        [HttpGet]
        [Route("api/temperature/celsiustofahrenheit/{celsius:decimal}")]
        public HttpResponseMessage ConvertCelsiusToFahrenheit(decimal celsius)
        {
            decimal fahrenheit;
            try
            {
                fahrenheit = ((celsius * 9) / 5) + 32;
                return this.Request.CreateResponse<decimal>(HttpStatusCode.OK, fahrenheit);
            }
            catch (Exception)
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.InternalServerError));
            }
        }
    }
}
