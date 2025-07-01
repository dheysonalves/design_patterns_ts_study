# Design Patterns TypeScript Study

A comprehensive study repository for learning and implementing design patterns using TypeScript.

## 📖 About

This project is a practical study of design patterns implemented in TypeScript. It serves as a reference guide and learning resource for understanding how different design patterns work and when to apply them in real-world scenarios.

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- TypeScript knowledge

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd design_patterns_ts_study
```

2. Install dependencies:

```bash
npm install
```

3. Run the project:

```bash
npx ts-node src/index.ts
```

## 📁 Project Structure

```text
├── src/
│   ├── index.ts                 # Main entry point
│   └── creational/              # Creational Design Patterns
│       ├── README.md
│       ├── interfaces/
│       │   └── UserSingleton.ts # Interface definitions
│       └── singleton/           # Singleton Pattern Implementation
│           ├── EXPLANATION.md   # Detailed pattern explanation
│           ├── module_a.ts      # Module A example
│           ├── module_b.ts      # Module B example
│           └── database/        # Database singleton examples
│               ├── my-database-function.ts
│               ├── my-database-module.ts
│               └── my-database-singleton.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 Design Patterns Covered

### Creational Patterns

#### ✅ Singleton Pattern

- **Location**: `src/creational/singleton/`
- **Purpose**: Ensures a class has only one instance and provides global access to it
- **Use Cases**:
  - Database connections
  - File servers
  - Print servers
  - Import modules
  - System configuration objects

**Key Features:**

- Private static instance attribute
- Private constructor to prevent instantiation with `new`
- Static getter method that creates or returns the existing instance
- Thread-safe implementation

**Example Usage:**

```typescript
const database1 = MyDatabaseSingleton.instance;
const database2 = MyDatabaseSingleton.instance;
// database1 === database2 (same instance)
```

## 🛠️ Development

### Available Scripts

- `npm test` - Run tests (currently not configured)

### Code Quality Tools

The project is configured with:

- **TypeScript**: For type safety and modern JavaScript features
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Code formatting
- **ts-node**: Direct TypeScript execution

### Configuration Files

- `tsconfig.json`: TypeScript compiler configuration
- `.eslintrc`: ESLint configuration with TypeScript and Prettier integration

## 📚 Learning Resources

Each pattern implementation includes:

- Detailed explanations in markdown files
- Practical examples with real-world scenarios
- Code comments explaining the implementation details
- Multiple usage examples demonstrating different approaches

## 🤝 Contributing

This is a study project, but contributions are welcome! Feel free to:

- Add new design patterns
- Improve existing implementations
- Add more examples and use cases
- Enhance documentation

## 📝 TODO

- [ ] Add more creational patterns (Factory, Builder, Prototype)
- [ ] Implement structural patterns (Adapter, Decorator, Facade)
- [ ] Add behavioral patterns (Observer, Strategy, Command)
- [ ] Include unit tests for all patterns
- [ ] Add performance benchmarks
- [ ] Create interactive examples

## 👨‍💻 Author

Dheyson Alves

## 📄 License

This project is licensed under the ISC License.

## 🔗 References

- [Design Patterns: Elements of Reusable Object-Oriented Software](https://en.wikipedia.org/wiki/Design_Patterns)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Refactoring Guru - Design Patterns](https://refactoring.guru/design-patterns)

---

Happy coding and learning! 🎉
