import "./Claim.css";

export const template = () => {
  return `
    <section class="ah-claim">
        <article class="ah-claim-list">
            <div class="ah-claim-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB80lEQVRYCe2Wu0scURSHJxIfiVr6jhHxWVioIQTBiJ2IxMbaP8HKxs5CbG0ttPEP0MoHYrNqqmARRFGCNrLgC8WgiJX6/WBlWXbuzJ5ZtdD9wYezc88598y9556r5+X03lfgQxYLUIdvJ9zDHziGV1ETs6zDA8ThLPG8zN8aMCnPZO1537HfhkOohS9QDu1QBDvQAC+iQqLuwpQjuj4mBr/B+mG4hOsXJufwOcC0mTFtjWojI1ky1fJvwG1A5H+MqSZ+BtikDFkSqMfzNMXb/4cKs8p/KP2tJQF5Z2KvLchYYX2glEgT0A86Ygp+CUGqZPAOjmANxuEafBWWwApejTANN74R3C9VrCNwAH1uM/fIV4b0xa1uk9CRtkQM1Y9ZXXiY9tMxg2Iolq+Ciipse74RcQYmocw3evKlM1ZQAkn39Ce14RhUQzcsQSR9jOTleT34FcMQqNguQNV/AiZFTWCPWbSs+npdQv9BHdCsqAn8YCa15C3IByWhe2AfTIpaAwPMsghXoAtqFQbBrKgJ/GWmXlCnE3rW/whmRd0Ctdc4tIDO+SzMw7NK16+CF2QR9VMiRkeUGE/VPYqzs5GEBB5jXHWiRHwVFljnfA50A+qoWaSbVB1yGBZcjmEJyK8CdN5L9MMgHdNNMDcnwxw50zewAo9mWUwUWZgyZwAAAABJRU5ErkJggg==" 
                class="ah-claim-icon"
                alt="Safe Purchase">
                <p class="ah-claim-p">Finalizar la compra de forma segura</p>
            </div>
            <div class="ah-claim-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAACshmLzAAAB8ElEQVRYCe2UyUoDQRRFYxzAYenC2U5w+AP/xAkRXLgUXPgJRn9AcPoLdSdEooILtwpOcUjUhSsXCiIKem7Mg6YJSXeSjgg+OHR1d1XdW69eVSTyH7+cgfqA+m30n4MpaIcT+IKaRByVa0jDFrxCEmQq9JB4Fi6hKa82zPMRDiBUEyZ+hNAnLIPFII1QTcQQyMA7ODAJNTNh4oeIpkDp74KamDBxCbfmUVsmusFMLNG2qNp2OMyotKvCW8BCRlJwBT0wAdoOr4kHvpVdmKrmNOxCM3jDTKhPKCYWmPge3CsvZqKXn1XNxCoTbnsVC7xbJnQxycQ4aDsSYKGaCLwdMwx6BhVaqZCJfZCJPihkYoDvgUxEGbAHF6AjVyrMxA0dZWIMvJkIbEKFqCoOauKWMf0gEx+QAAszocVpkSXDbaKzZO+fu0LbUczEEP9fYNrHfLku5Zq4Y7QDo6BMLILFDo0Ve/HzrMREDAG3iUbedX/M+xF29zET53z0ux2qoQy4TZzyrhOj+QJHJSZUgEnIQjywsmtAuSbeqiFuPoKYqGPQJthW2BwVP/2YkPhaGOLm3m2iwz7mnxJfh6qv3KOTq2ZV+xnY6YjS3oDQxdHIhTKRgifQqo9BR80BX6F0VRoNTDALI6CLRjedrtz/+BsZ+AYn8Y5RwDGYlwAAAABJRU5ErkJggg==" 
                class="ah-claim-icon"
                alt="Secure Payment">
                <p class="ah-claim-p">Pago seguro</p>
            </div>
            <div class="ah-claim-item">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAQKADAAQAAAABAAAAQAAAAABGUUKwAAAC/UlEQVR4Ae2YO4sUQRSF11cqJiqKShsoaGAiBhoYiUaamQgiGBqY+htMBBUNxGANjAxENtLAQE0WTFVQkAXxgciqiCC4Pr7DdjWzQz+ruoremXvhUDVdVffce+ox1T0zY2YKmAKmgClgCpgCpoApYAqYAtOowJqOSe+i/+aOY7p2/8iAD10Hxe6/E4Jn4F8iPIVHnIOxlMk7kSVCdGuzBbYTxfs8ksuU9yJHdRr/l3IObbl3kfka3R+kh5sV1WNbUr61sbMZun8TYOgzFDs+WwGxFR66f1sBQ5+h2PGtj00Q6H9fw/hF2heA7inRLOnFhCxG+dwFrK58wZgDvtlPwhmwn+TngNdq9hrkq7bHuLOMeVUz7ght14DeGY6Cx6B3G12Sqse2LnwbCGYJaItc8AlstW+B3yS9kCe+ZxoFUM5vTIBlBaZ+BexGh3X5amhdrPYzQIm6LaAD8RaQEK1tEgR4Traf8ozPU74Gs2AvaLRJEOALWR4CN8AvoLvNOfAS3AUbQZB1+V8OIsoHh/Btw8cV8BO46/P93K930SWgHbAIIdYH3xYCuAMkwl+wFZRaH1tAzm8DvZnpE7agup5VEtPma234PuP8ek6gT/9Bk1I3I4dx/h245TZeqk19ulhffHV+inhCVkCGlwdAh8wS0EvJqRyq65na1CcDoZbhICVfEW+Vkjp1NeO6j+tNbNz0TG3qo75trS++Kj8r4uj6Ouy+0GjlnMk93aR8ssLr8g89U9tFoL6zQAdSkzkO9XN1H775JqK27aNKju9x/T5Z40htZWNCnvnwKYdSk7JN9pYOi02dBtyu2HU7LLU2W+ArIzMwerWUcI/AJnAMzIEyU5vsGzgB/uiHh+kl5yHownec/tpymsAfoHeLdQhWBZqaryqO4nlGTRcO7Wed9leB9qeguvsHUJ8MhFqGg5R8reKNcRGqI07NVxdL0TZ6NXWnuw6eFFfhFHxFom0qunMLqSw1X6q8jMcUMAVMAVPAFDAFTAFTwBQwBUyBuAr8Bx3IMuqgb3dDAAAAAElFTkSuQmCC" 
                class="ah-claim-icon"
                alt="Free Shipping">
                <p class="ah-claim-p">Envío gratis</p>
                </div>
        </article>
        <article class="ah-newsletter">
            <div class="ah-newsletter-content">
                <h3>Newsletter</h3>
                <p>Conoce las novedades sobre las nuevas tendencias.</p>             
            </div>
            <div class="ah-newsletter-btn-wrapper">
                <a href="#" class="ah-newsletter-btn">SUSCRÍBETE</a>
            </div>
        </article>
    </section>
    `;
};