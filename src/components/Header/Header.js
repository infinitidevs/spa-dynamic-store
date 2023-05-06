import "./Header.css";

const template = () => {
  return `
  <div class="ah-layout-container">
      <div class="ah-section-header-layout ah-layout-flex">
          <a href="#home" role="link" class="ah-section-header--title" id="home-link">
              <h1 class="ah-logo">VISIONARY</h1>
          </a> 
          <label class="ah-hamburger-label" for="hamburger">&#9776;</label>
          <input type="checkbox" class="ah-hamburger" id="hamburger" />
          <nav role="navigation" class="ah-section-nav ah-section-nav-left">
              <ul class="ah-layout-flex ah-section-header-nav">
                  <li>
                      <a href="#sunglasses" role="link" aria-label="#"
                          class="ah-section-header--nav-link" 
                          id="sunglasses-link">GAFAS DE SOL</a>
                  </li>
                  <li>
                      <a href="#gafas-graduadas" role="link" aria-label="#"
                          class="ah-section-header--nav-link">GAFAS GRADUADAS</a>
                  </li>
                  <li>
                      <a href="#new-in" role="link" aria-label="#"
                          class="ah-section-header--nav-link">NEW IN</a>
                  </li>
                  <li>
                      <a href="#find-your-style" role="link" aria-label="#"
                          class="ah-section-header--nav-link">FIND YOUR STYLE</a>
                  </li>
              </ul>
          </nav>
          <nav role="navigation" class="ah-section-nav ah-section-nav-right">
              <ul class="ah-layout-flex ah-section-header-nav ah-section-header-nav-right">
                  <li>
                      <img src="https://www.ray-ban.com/rbstatichtml/assets/images/es-flag.svg"
                          alt="Location Icon" class="ah-icons" />
                  </li>
                  <li>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS43NTA3IDUuMDcxNjJDOC44OTAzNSA1LjA3MTYyIDYuNTcxNjIgNy4zOTAzNSA2LjU3MTYyIDEwLjI1MDdDNi41NzE2MiAxMC44MzYzIDYuODUxNyAxMS42NTY1IDcuNDA5NDYgMTIuNjQ3MUM3Ljk1MTU5IDEzLjYxIDguNjg4MDIgMTQuNjE2NyA5LjQ0NTMzIDE1LjU0MzVDMTAuMTk5NCAxNi40NjY1IDEwLjk1NjMgMTcuMjg4NSAxMS41MjYxIDE3Ljg4MUMxMS42MDQ4IDE3Ljk2MjggMTEuNjc5OCAxOC4wNDAxIDExLjc1MDcgMTguMTEyNkMxMS44MjE1IDE4LjA0MDEgMTEuODk2NSAxNy45NjI4IDExLjk3NTIgMTcuODgxQzEyLjU0NSAxNy4yODg1IDEzLjMwMTkgMTYuNDY2NSAxNC4wNTYgMTUuNTQzNUMxNC44MTMzIDE0LjYxNjcgMTUuNTQ5NyAxMy42MSAxNi4wOTE4IDEyLjY0NzFDMTYuNjQ5NiAxMS42NTY1IDE2LjkyOTcgMTAuODM2MyAxNi45Mjk3IDEwLjI1MDdDMTYuOTI5NyA3LjM5MDM1IDE0LjYxMSA1LjA3MTYyIDExLjc1MDcgNS4wNzE2MlpNMTEuNzUwNyAxOS41NzI5TDEyLjQ2MzIgMjAuMzI0N0wxMS43NTA3IDIxTDExLjAzODEgMjAuMzI0N0wxMS43NTA3IDE5LjU3MjlaTTQuNSAxMC4yNTA3QzQuNSA2LjI0NjIzIDcuNzQ2MjMgMyAxMS43NTA3IDNDMTUuNzU1MSAzIDE5LjAwMTMgNi4yNDYyMyAxOS4wMDEzIDEwLjI1MDdDMTkuMDAxMyAxMS4zODEyIDE4LjUwNDUgMTIuNTg0NCAxNy44OTcgMTMuNjYzNUMxNy4yNzM5IDE0Ljc3MDMgMTYuNDU2NiAxNS44Nzk2IDE1LjY2MDIgMTYuODU0M0MxNC44NjA2IDE3LjgzMjkgMTQuMDYzOCAxOC42OTc5IDEzLjQ2ODMgMTkuMzE3QzEzLjE3IDE5LjYyNzIgMTIuOTIwOSAxOS44NzcxIDEyLjc0NTQgMjAuMDUwM0MxMi42NTc2IDIwLjEzNjkgMTIuNTg4MiAyMC4yMDQ1IDEyLjU0MDIgMjAuMjUwOUwxMi40ODQ1IDIwLjMwNDRMMTIuNDY5NCAyMC4zMTg4TDEyLjQ2MzIgMjAuMzI0N0MxMi40NjMgMjAuMzI0OSAxMi40NjMyIDIwLjMyNDcgMTEuNzUwNyAxOS41NzI5QzExLjAzODEgMjAuMzI0NyAxMS4wMzgzIDIwLjMyNDkgMTEuMDM4MSAyMC4zMjQ3TDExLjAzMTkgMjAuMzE4OEwxMS4wMTY4IDIwLjMwNDRMMTAuOTYxMiAyMC4yNTA5QzEwLjkxMzEgMjAuMjA0NSAxMC44NDM3IDIwLjEzNjkgMTAuNzU1OSAyMC4wNTAzQzEwLjU4MDUgMTkuODc3MSAxMC4zMzEzIDE5LjYyNzIgMTAuMDMzIDE5LjMxN0M5LjQzNzU0IDE4LjY5NzkgOC42NDA3MyAxNy44MzI5IDcuODQxMTMgMTYuODU0M0M3LjA0NDczIDE1Ljg3OTYgNi4yMjc0NSAxNC43NzAzIDUuNjA0MjkgMTMuNjYzNUM0Ljk5Njc3IDEyLjU4NDQgNC41IDExLjM4MTIgNC41IDEwLjI1MDdaTTkuOTM3OTkgMTAuMjUwN0M5LjkzNzk5IDkuMjQ5NTcgMTAuNzQ5NSA4LjQzNzk5IDExLjc1MDcgOC40Mzc5OUMxMi43NTE4IDguNDM3OTkgMTMuNTYzMyA5LjI0OTU3IDEzLjU2MzMgMTAuMjUwN0MxMy41NjMzIDExLjI1MTggMTIuNzUxOCAxMi4wNjMzIDExLjc1MDcgMTIuMDYzM0MxMC43NDk1IDEyLjA2MzMgOS45Mzc5OSAxMS4yNTE4IDkuOTM3OTkgMTAuMjUwN1pNMTEuNzUwNyAxMC41MDk2QzExLjg5MzcgMTAuNTA5NiAxMi4wMDk2IDEwLjM5MzcgMTIuMDA5NiAxMC4yNTA3QzEyLjAwOTYgMTAuMTA3NyAxMS44OTM3IDkuOTkxNyAxMS43NTA3IDkuOTkxN0MxMS42MDc3IDkuOTkxNyAxMS40OTE3IDEwLjEwNzcgMTEuNDkxNyAxMC4yNTA3QzExLjQ5MTcgMTAuMzkzNyAxMS42MDc2IDEwLjUwOTYgMTEuNzUwNyAxMC41MDk2WiIgZmlsbD0iY3VycmVudENvbG9yIi8+Cjwvc3ZnPg=="
                          alt="Location Icon" class="ah-icons" />
                  </li>
                  <li>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zIDEwLjg3NUMzIDYuNTI1NzYgNi41MjU3NiAzIDEwLjg3NSAzQzE1LjIyNDIgMyAxOC43NSA2LjUyNTc1IDE4Ljc1IDEwLjg3NUMxOC43NSAxMi42NDM0IDE4LjE2NjIgMTQuMjc2OSAxNy4xODIxIDE1LjU5MTFMMjAuNjcwNSAxOS4wNzk1QzIxLjEwOTggMTkuNTE4OCAyMS4xMDk4IDIwLjIzMTIgMjAuNjcwNSAyMC42NzA1QzIwLjIzMTIgMjEuMTA5OCAxOS41MTg4IDIxLjEwOTggMTkuMDc5NSAyMC42NzA1TDE1LjU5MTEgMTcuMTgyMUMxNC4yNzY4IDE4LjE2NjEgMTIuNjQzNCAxOC43NSAxMC44NzUgMTguNzVDNi41MjU3NSAxOC43NSAzIDE1LjIyNDIgMyAxMC44NzVaTTEwLjg3NSA1LjI1QzcuNzY4NCA1LjI1IDUuMjUgNy43Njg0IDUuMjUgMTAuODc1QzUuMjUgMTMuOTgxNiA3Ljc2ODQgMTYuNSAxMC44NzUgMTYuNUMxMi40MzEzIDE2LjUgMTMuODM4MiAxNS44Njk0IDE0Ljg1NzggMTQuODQ3MkwxNC44NTc4IDE0Ljg0NzJDMTUuODczOCAxMy44Mjg1IDE2LjUgMTIuNDI2IDE2LjUgMTAuODc1QzE2LjUgNy43Njg0IDEzLjk4MTYgNS4yNSAxMC44NzUgNS4yNVoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4="
                          alt="Search Icon" class="ah-icons" />
                  </li>
                  <li>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjUgOEM3LjUgNS4yMzg1OCA5LjczODU3IDMgMTIuNSAzQzE1LjI2MTQgMyAxNy41IDUuMjM4NTcgMTcuNSA4QzE3LjUgOS40ODAzIDE2Ljg1NjcgMTAuODEwNCAxNS44MzQ0IDExLjcyNTlDMTguNTg3OSAxMi45OTAxIDIwLjUgMTUuNzcxNyAyMC41IDE5VjIwQzIwLjUgMjAuNTUyMyAyMC4wNTIzIDIxIDE5LjUgMjFDMTguOTQ3NyAyMSAxOC41IDIwLjU1MjMgMTguNSAyMFYxOUMxOC41IDE1LjY4NjMgMTUuODEzNyAxMyAxMi41IDEzQzkuMTg2MjkgMTMgNi41IDE1LjY4NjMgNi41IDE5VjIwQzYuNSAyMC41NTIzIDYuMDUyMjggMjEgNS41IDIxQzQuOTQ3NzIgMjEgNC41IDIwLjU1MjMgNC41IDIwVjE5QzQuNSAxNS43NzE4IDYuNDEyMTQgMTIuOTkwMSA5LjE2NTYgMTEuNzI1OUM4LjE0MzMgMTAuODEwNCA3LjUgOS40ODAzIDcuNSA4Wk0xMi41IDVDMTAuODQzMSA1IDkuNSA2LjM0MzE0IDkuNSA4QzkuNSA5LjY1NjgyIDEwLjg0MzIgMTEgMTIuNSAxMUMxNC4xNTY4IDExIDE1LjUgOS42NTY4MiAxNS41IDhDMTUuNSA2LjM0MzE1IDE0LjE1NjggNSAxMi41IDVaIiBmaWxsPSJjdXJyZW50Q29sb3IiLz4KPC9zdmc+"
                          alt="User icon" class="ah-icons" />
                  </li>
                  <li>
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjU4OTk5IDQuNTM1MTJDNC4wMjc3NyA0LjQwMzc5IDQuNDg5MTMgNC42NTIyMSA0LjYyMDQ3IDUuMDg5OTlMNS4wNjQyMiA2LjU2OTE2SDIwLjE3MjRDMjAuNDM0IDYuNTY5MTYgMjAuNjgwMiA2LjY5Mjg1IDIwLjgzNjQgNi45MDI3M0MyMC45OTI1IDcuMTEyNjEgMjEuMDQwMyA3LjM4Mzk3IDIwLjk2NTEgNy42MzQ1NEwxOC40ODI0IDE1LjkxMDNDMTguMzc3MyAxNi4yNjAzIDE4LjA1NTIgMTYuNTAwMSAxNy42ODk3IDE2LjUwMDFINi45MzEyQzYuNTY1NzQgMTYuNTAwMSA2LjI0MzU0IDE2LjI2MDMgNi4xMzg1MyAxNS45MTAzTDMuMDM1MTIgNS41NjU2QzIuOTAzNzkgNS4xMjc4MSAzLjE1MjIxIDQuNjY2NDUgMy41ODk5OSA0LjUzNTEyWk01LjU2MDc2IDguMjI0MzFMNy41NDY5NSAxNC44NDQ5SDE3LjA3MzlMMTkuMDYwMSA4LjIyNDMxSDUuNTYwNzZaTTguNTg2MzYgMTcuNzQxNEM5LjA0MzQxIDE3Ljc0MTQgOS40MTM5MyAxOC4xMTE5IDkuNDEzOTMgMTguNTY5QzkuNDEzOTMgMTguNzk3NSA5LjU5OTIgMTguOTgyOCA5LjgyNzcyIDE4Ljk4MjhDMTAuMDU2MiAxOC45ODI4IDEwLjI0MTUgMTguNzk3NSAxMC4yNDE1IDE4LjU2OUMxMC4yNDE1IDE4LjExMTkgMTAuNjEyIDE3Ljc0MTQgMTEuMDY5MSAxNy43NDE0QzExLjUyNjEgMTcuNzQxNCAxMS44OTY3IDE4LjExMTkgMTEuODk2NyAxOC41NjlDMTEuODk2NyAxOS43MTE2IDEwLjk3MDMgMjAuNjM3OSA5LjgyNzcyIDIwLjYzNzlDOC42ODUwNiAyMC42Mzc5IDcuNzU4NzggMTkuNzExNiA3Ljc1ODc4IDE4LjU2OUM3Ljc1ODc4IDE4LjExMTkgOC4xMjkzIDE3Ljc0MTQgOC41ODYzNiAxNy43NDE0Wk0xMy41NTE4IDE3Ljc0MTRDMTQuMDA4OSAxNy43NDE0IDE0LjM3OTQgMTguMTExOSAxNC4zNzk0IDE4LjU2OUMxNC4zNzk0IDE4Ljc5NzUgMTQuNTY0NyAxOC45ODI4IDE0Ljc5MzIgMTguOTgyOEMxNS4wMjE3IDE4Ljk4MjggMTUuMjA3IDE4Ljc5NzUgMTUuMjA3IDE4LjU2OUMxNS4yMDcgMTguMTExOSAxNS41Nzc1IDE3Ljc0MTQgMTYuMDM0NSAxNy43NDE0QzE2LjQ5MTYgMTcuNzQxNCAxNi44NjIxIDE4LjExMTkgMTYuODYyMSAxOC41NjlDMTYuODYyMSAxOS43MTE2IDE1LjkzNTggMjAuNjM3OSAxNC43OTMyIDIwLjYzNzlDMTMuNjUwNiAyMC42Mzc5IDEyLjcyNDIgMTkuNzExNiAxMi43MjQyIDE4LjU2OUMxMi43MjQyIDE4LjExMTkgMTMuMDk0OCAxNy43NDE0IDEzLjU1MTggMTcuNzQxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciIvPgo8L3N2Zz4="
                          alt="Shopping Cart Icon" class="ah-icons" />
                  </li>
              </ul>
          </nav>
      </div>
  </div>
    `;
};

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
};
