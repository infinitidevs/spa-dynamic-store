import "./FiltersForm.css";

export const template = () => {
  return `
        <section class="ah-filters-container" id="filters-container">
          <form id="search-form">
            <fieldset class="ah-form-container">
              <legend>FILTROS</legend>
                <div>
                  <span class="ah-title-container-filters">MARCA</span>
                </div>
                <article class="ah-select-warpper">
                  <select class="ah-select-options" id="select-options">
                    <option value="ALL">TODAS</option>
                    <option value="RAY-BAN">RAY-BAN</option>
                    <option value="DOLCE&GABBANA">DOLCE&GABBANA</option>
                    <option value="ARMANI">ARMANI</option>
                    <option value="VERSACE">VERSACE</option>
                    <option value="BURBERRY">BURBERRY</option>
                  </select>
                </article>
                <div>
                  <span class="ah-title-container-filters">PRECIO</span>
                </div>
                <article class="ah-price-input">
                  <input type="number" class="ah-search-input" id="search-input" placeholder="Buscar por precio">
                </article>
                <article class="ah-buttons-container">
                  <button type="submit" class="ah-btn-search">BUSCAR</button>
                  <button class="ah-btn-search" id="btn-clean">LIMPIAR</button>
                </article>
            </fieldset>
          </form>
        </section>
    `;
};
