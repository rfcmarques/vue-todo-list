import Assignments from "./Assignments.js"
import Card from "./Card.js"

export default {
  components: { Assignments, Card },

  template: `
    <div class="grid gap-6">
      <assignments></assignments>

    </div>`,

}