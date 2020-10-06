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
            <li>
              <router-link to="/unprepared/example2">
                Example 2
              </router-link>
              - Trivial Solution
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
