# Firebase Studio

## ReplyRocket: AI-Powered Reply Generation

ReplyRocket is a web application designed to help users generate contextually relevant and tonally appropriate replies for various communication platforms. Leveraging the power of AI, it simplifies the process of crafting responses by analyzing input context and generating tailored suggestions.

### Core Features:

* **Contextual Reply Generation:** ReplyRocket analyzes the input text or conversation to understand the context and generate replies that are relevant and natural.
* **Tone Analysis and Adjustment:** The application can detect the tone of the input and generate replies that match or adjust the tone as needed (e.g., professional, casual, empathetic).
* **Prompt Improvement:** Users can provide a prompt or a starting point for their reply, and ReplyRocket can help refine and improve it for better results.
* **Support for various contexts:** Designed to be adaptable for different communication scenarios (emails, messages, social media, etc.).

### Styling Guidelines:

ReplyRocket utilizes `shadcn/ui` for its UI components, which is built on top of Tailwind CSS and Radix UI. Adhering to the following guidelines ensures a consistent and maintainable codebase:

* **Tailwind CSS:** Use Tailwind CSS classes for styling. Avoid inline styles or separate CSS files where possible.
* **shadcn/ui Components:** Utilize the provided `shadcn/ui` components for common UI elements. Customize them using Tailwind CSS classes and the component's props.
* **Radix UI:** Understand that `shadcn/ui` uses Radix UI for headless components, providing accessibility and behavior. While you primarily interact with `shadcn/ui`, be aware of the underlying Radix UI concepts if you need to build custom components.
* **Theming:** The application's theme is configured in `tailwind.config.ts`. Modifications to the theme should be done here.
* **Utility Classes:** Favor Tailwind's utility classes for styling whenever a specific style is needed. This promotes consistency and reduces the need for custom CSS.
* **Component Structure:** Organize your components logically, following a component-based architecture. Style-related code should ideally reside within or alongside the components they style.
* **Responsiveness:** Use Tailwind's responsive utility classes to ensure the application is
  responsive across different screen sizes.
* **Accessibility:** Leverage the accessibility features provided by `shadcn/ui` and Radix UI. Pay attention to semantic HTML and ARIA attributes when building custom components.
* **Code Formatting:** Maintain consistent code formatting using a tool like Prettier.

By following these guidelines, we can ensure that the ReplyRocket codebase remains clean, maintainable, and visually consistent.

To get started, take a look at src/app/page.tsx.
