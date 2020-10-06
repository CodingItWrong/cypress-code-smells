<template>
  <div>
    <header>
      <h1>Cypress Code Smells</h1>
    </header>
    <nav>
      <ul>
        <li>
          Unprepared Element
          <ul>
            <li>
              <router-link to="/unprepared/example1">
                Example 1
              </router-link>
              - Trivial Failure
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
  </div>
</template>
