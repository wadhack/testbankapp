import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Landmark,
  ShieldCheck,
  User,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  BadgeCheck,
  MessageCircle,
  Eye,
  EyeOff,
} from "lucide-react";

function BiometricIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3a5 5 0 0 0-5 5v1.5" />
      <path d="M12 3a5 5 0 0 1 5 5v1.5" />
      <path d="M8.5 11.5V9a3.5 3.5 0 1 1 7 0v2.5" />
      <path d="M7.5 13.5v1a4.5 4.5 0 0 0 9 0v-1" />
      <path d="M10 14.5v1.5a2 2 0 1 0 4 0v-1.5" />
      <path d="M12 14.5v4.5" />
    </svg>
  );
}

function ProtectionIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5c0 4.4-2.8 7.7-7 10-4.2-2.3-7-5.6-7-10V6l7-3z" />
      <path d="M9.5 11.8l1.7 1.7 3.5-4" />
    </svg>
  );
}

function AccessIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function EcosystemIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="7" height="6" rx="1.4" />
      <rect x="14" y="5" width="7" height="6" rx="1.4" />
      <rect x="8.5" y="14" width="7" height="5" rx="1.4" />
      <path d="M10 8h4" />
      <path d="M12 8v6" />
    </svg>
  );
}

function WalletIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 15.5v-7z" />
      <path d="M4 9h15" />
      <path d="M16.5 13h2" />
    </svg>
  );
}

function TransferIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 7h10" />
      <path d="M13.5 3.5L17 7l-3.5 3.5" />
      <path d="M17 17H7" />
      <path d="M10.5 13.5L7 17l3.5 3.5" />
    </svg>
  );
}

function AlertIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
      <path d="M10.3 4.6 3.9 16a2 2 0 0 0 1.8 3h12.6a2 2 0 0 0 1.8-3L13.7 4.6a2 2 0 0 0-3.4 0z" />
    </svg>
  );
}

function SearchUiIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
    </svg>
  );
}

function NotificationIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.5 9a5.5 5.5 0 1 1 11 0v3.8l1.3 2.2H5.2l1.3-2.2V9Z" />
      <path d="M10 18a2 2 0 0 0 4 0" />
    </svg>
  );
}

function StatementIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 3h8l4 4v13a1 1 0 0 1-1 1H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M16 3v5h5" />
      <path d="M10 12h6" />
      <path d="M10 16h6" />
    </svg>
  );
}

function TrendIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 17.5 10 11.5l4 4L20 8" />
      <path d="M15 8h5v5" />
    </svg>
  );
}

function DeviceIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="4" y="5" width="16" height="11" rx="2" />
      <path d="M10 19h4" />
      <path d="M12 16v3" />
    </svg>
  );
}

const authLabels = {
  password: "Пароль",
  esia: "ЕСИА",
  vk: "ВКонтакте",
  biometric: "Биометрия",
};

const DEMO_DB_KEY = "aurelia-bank-demo-db-v3";
const DEMO_SESSION_KEY = "aurelia-bank-demo-session-v3";

function createInitialUserCatalog() {
  return {
    byLogin: {
      "a.vernier": {
        id: "usr-premium-01",
        login: "a.vernier",
        password: "Silver2468",
        fullName: "Adrien Vernier",
        email: "a.vernier@aurelia.bank",
        geo: "Москва",
        segment: "Premium",
        authMethods: ["password", "esia", "biometric"],
        dashboardTone: "premium",
        metrics: {
          totalBalance: 1845200,
          availableBalance: 1684200,
          reservedBalance: 161000,
          monthTurnover: 2864300,
        },
        products: [
          {
            kind: "Карта",
            title: "Aurelia Black",
            number: "•••• 1842",
            amount: 624800,
            status: "Активна",
          },
          {
            kind: "Счёт",
            title: "Premium Reserve",
            number: "•••• 7210",
            amount: 1220400,
            status: "Основной счёт",
          },
          {
            kind: "Вклад",
            title: "Capital Protect 180",
            number: "до 8.6%",
            amount: 540000,
            status: "До 18.08.2026",
          },
        ],
        operations: [
          {
            title: "Перевод в пользу ООО «Север»",
            date: "28.02.2026",
            time: "14:10",
            amount: "−48 000 ₽",
            status: "Исполнено",
            channel: "Aurelia Online",
            category: "Переводы",
          },
          {
            title: "Поступление заработной платы",
            date: "27.02.2026",
            time: "10:03",
            amount: "+320 000 ₽",
            status: "Зачислено",
            channel: "Payroll",
            category: "Поступления",
          },
          {
            title: "Пополнение брокерского счёта",
            date: "26.02.2026",
            time: "16:52",
            amount: "−150 000 ₽",
            status: "Исполнено",
            channel: "Инвестиции",
            category: "Инвестиции",
          },
        ],
        upcomingPayments: [
          {
            title: "Премиальный пакет",
            due: "03.03.2026",
            amount: "12 900 ₽",
          },
          {
            title: "Страхование карты",
            due: "11.03.2026",
            amount: "3 600 ₽",
          },
        ],
        security: {
          lastVerifiedLogin: "28.02.2026, 12:08",
          sessionLimit: "24 часа",
          activeDevice: "Windows • Edge • Москва",
          riskLevel: "Низкий",
        },
      },
      "atlas.trade": {
        id: "usr-business-02",
        login: "atlas.trade",
        password: "Treasury884",
        fullName: "Atlas Trade LLC",
        email: "finance@atlas-trade.ru",
        geo: "Санкт-Петербург",
        segment: "Business",
        authMethods: ["password", "esia", "vk"],
        dashboardTone: "business",
        metrics: {
          totalBalance: 962430,
          availableBalance: 841900,
          reservedBalance: 120530,
          monthTurnover: 4317800,
        },
        products: [
          {
            kind: "Р/с",
            title: "Расчётный счёт",
            number: "40702 •••• 1184",
            amount: 714900,
            status: "Операционный",
          },
          {
            kind: "Резерв",
            title: "Зарплатный резерв",
            number: "40702 •••• 0451",
            amount: 247530,
            status: "Резерв",
          },
          {
            kind: "Эквайринг",
            title: "Торговая выручка",
            number: "За февраль",
            amount: 1184600,
            status: "Оборот",
          },
        ],
        operations: [
          {
            title: "Налоговый платёж",
            date: "28.02.2026",
            time: "09:41",
            amount: "−86 200 ₽",
            status: "Исполнено",
            channel: "Клиент-Банк",
            category: "Бюджет",
          },
          {
            title: "Поступление от контрагента",
            date: "27.02.2026",
            time: "17:24",
            amount: "+194 000 ₽",
            status: "Зачислено",
            channel: "Входящий платёж",
            category: "Поступления",
          },
          {
            title: "Исходящий платёж поставщику",
            date: "26.02.2026",
            time: "12:11",
            amount: "−42 500 ₽",
            status: "Проверен",
            channel: "Подпись 1/2",
            category: "Поставщики",
          },
        ],
        upcomingPayments: [
          {
            title: "НДС к уплате",
            due: "05.03.2026",
            amount: "214 000 ₽",
          },
          {
            title: "Зарплатный реестр",
            due: "07.03.2026",
            amount: "486 000 ₽",
          },
        ],
        security: {
          lastVerifiedLogin: "28.02.2026, 08:56",
          sessionLimit: "12 часов",
          activeDevice: "Windows • Chrome • Санкт-Петербург",
          riskLevel: "Низкий",
        },
      },
      "nora.client": {
        id: "usr-retail-03",
        login: "nora.client",
        password: "Client2026",
        fullName: "Nora Lind",
        email: "nora.lind@inbox.ru",
        geo: "Казань",
        segment: "Retail",
        authMethods: ["password", "vk", "biometric"],
        dashboardTone: "retail",
        metrics: {
          totalBalance: 138450,
          availableBalance: 126900,
          reservedBalance: 11550,
          monthTurnover: 247800,
        },
        products: [
          {
            kind: "Карта",
            title: "Aurelia Daily",
            number: "•••• 5604",
            amount: 82450,
            status: "Основная карта",
          },
          {
            kind: "Счёт",
            title: "Накопительный счёт",
            number: "6.9% годовых",
            amount: 56000,
            status: "Ежедневный доход",
          },
          {
            kind: "Кредит",
            title: "Рассрочка 0%",
            number: "Лимит 90 000 ₽",
            amount: 18000,
            status: "Остаток долга",
          },
        ],
        operations: [
          {
            title: "Оплата маркетплейса",
            date: "28.02.2026",
            time: "18:12",
            amount: "−4 980 ₽",
            status: "Исполнено",
            channel: "Карта",
            category: "Покупки",
          },
          {
            title: "Пополнение с карты другого банка",
            date: "27.02.2026",
            time: "11:18",
            amount: "+12 000 ₽",
            status: "Зачислено",
            channel: "SBP",
            category: "Пополнения",
          },
          {
            title: "Оплата мобильной связи",
            date: "26.02.2026",
            time: "08:44",
            amount: "−790 ₽",
            status: "Исполнено",
            channel: "Шаблон",
            category: "Услуги",
          },
        ],
        upcomingPayments: [
          {
            title: "Подписка Premium",
            due: "04.03.2026",
            amount: "1 290 ₽",
          },
          {
            title: "Платёж по рассрочке",
            due: "10.03.2026",
            amount: "6 000 ₽",
          },
        ],
        security: {
          lastVerifiedLogin: "28.02.2026, 18:31",
          sessionLimit: "24 часа",
          activeDevice: "iPhone • Safari • Казань",
          riskLevel: "Низкий",
        },
      },
    },
  };
}

function cloneData(value) {
  return JSON.parse(JSON.stringify(value));
}

const demoStore = {
  canUseStorage() {
    return typeof window !== "undefined" && Boolean(window.localStorage);
  },
  readDb() {
    const fresh = createInitialUserCatalog();

    if (!this.canUseStorage()) {
      return cloneData(fresh);
    }

    const raw = window.localStorage.getItem(DEMO_DB_KEY);

    if (!raw) {
      window.localStorage.setItem(DEMO_DB_KEY, JSON.stringify(fresh));
      return cloneData(fresh);
    }

    try {
      return JSON.parse(raw);
    } catch {
      window.localStorage.setItem(DEMO_DB_KEY, JSON.stringify(fresh));
      return cloneData(fresh);
    }
  },
  writeDb(db) {
    if (!this.canUseStorage()) return;
    window.localStorage.setItem(DEMO_DB_KEY, JSON.stringify(db));
  },
  readSession() {
    if (!this.canUseStorage()) return null;

    const raw = window.localStorage.getItem(DEMO_SESSION_KEY);

    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  },
  writeSession(session) {
    if (!this.canUseStorage()) return;
    window.localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify(session));
  },
  clearSession() {
    if (!this.canUseStorage()) return;
    window.localStorage.removeItem(DEMO_SESSION_KEY);
  },
  resetAll() {
    const fresh = createInitialUserCatalog();

    if (this.canUseStorage()) {
      window.localStorage.setItem(DEMO_DB_KEY, JSON.stringify(fresh));
      window.localStorage.removeItem(DEMO_SESSION_KEY);
    }

    return cloneData(fresh);
  },
};

const demoBankApi = {
  delay(ms = 300) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
  },
  normalizeLogin(login) {
    return login.trim().toLowerCase();
  },
  getRawUser(login, db = demoStore.readDb()) {
    return db.byLogin[this.normalizeLogin(login)] || null;
  },
  sanitizeUser(user) {
    if (!user) return null;
    const { password, ...safeUser } = user;
    return cloneData(safeUser);
  },
  getUserByLogin(login) {
    const rawUser = this.getRawUser(login);
    return rawUser ? this.sanitizeUser(rawUser) : null;
  },
  getAvailableMethods(login) {
    const rawUser = this.getRawUser(login);
    return rawUser?.authMethods ?? [];
  },
  saveSession(login, authMethod, rememberFor24h) {
    demoStore.writeSession({
      login: this.normalizeLogin(login),
      authMethod,
      rememberFor24h,
      createdAt: Date.now(),
    });
  },
  restoreSession() {
    const session = demoStore.readSession();

    if (!session?.login) return null;

    const user = this.getUserByLogin(session.login);

    if (!user) {
      demoStore.clearSession();
      return null;
    }

    return {
      user,
      authMethod: session.authMethod || "password",
    };
  },
  resetDemoData() {
    demoStore.resetAll();
  },
  logout() {
    demoStore.clearSession();
  },
  async authenticateWithPassword(login, password, rememberFor24h) {
    await this.delay(900);

    const db = demoStore.readDb();
    const user = this.getRawUser(login, db);

    if (!user) {
      return { ok: false, error: "Пользователь с таким логином не найден." };
    }

    if (user.password !== password) {
      return { ok: false, error: "Неверный пароль. Проверьте данные и попробуйте снова." };
    }

    this.saveSession(user.login, "password", rememberFor24h);

    return {
      ok: true,
      user: this.sanitizeUser(user),
    };
  },
  async authenticateWithMethod(login, method, rememberFor24h) {
    await this.delay(700);

    const db = demoStore.readDb();
    const user = this.getRawUser(login, db);

    if (!user) {
      return { ok: false, error: "Пользователь с таким логином не найден." };
    }

    if (!user.authMethods.includes(method)) {
      return {
        ok: false,
        error: `Для этого аккаунта метод «${authLabels[method]}» недоступен.`,
      };
    }

    this.saveSession(user.login, method, rememberFor24h);

    return {
      ok: true,
      user: this.sanitizeUser(user),
    };
  },
  async transfer({ login, sourceIndex, recipient, amount }) {
    await this.delay(650);

    const db = demoStore.readDb();
    const user = this.getRawUser(login, db);
    const numericAmount = Number(amount);

    if (!user) {
      return { ok: false, error: "Пользователь не найден." };
    }

    if (!recipient.trim()) {
      return { ok: false, error: "Укажите получателя для внутрибанковского перевода." };
    }

    if (!numericAmount || numericAmount <= 0) {
      return { ok: false, error: "Введите корректную сумму перевода." };
    }

    if (numericAmount > user.metrics.availableBalance) {
      return { ok: false, error: "Недостаточно доступного остатка для перевода." };
    }

    const productIndex = Number(sourceIndex);
    const sourceProduct = user.products[productIndex];

    if (sourceProduct) {
      sourceProduct.amount = Math.max(sourceProduct.amount - numericAmount, 0);
    }

    user.metrics.totalBalance = Math.max(user.metrics.totalBalance - numericAmount, 0);
    user.metrics.availableBalance = Math.max(user.metrics.availableBalance - numericAmount, 0);
    user.metrics.monthTurnover += numericAmount;

    user.operations.unshift({
      title: `Внутрибанковский перевод — ${recipient}`,
      date: "28.02.2026",
      time: "19:40",
      amount: `−${formatCurrency(numericAmount)}`,
      status: "Исполнено",
      channel: "Aurelia Online",
      category: "Переводы",
    });
    user.operations = user.operations.slice(0, 8);

    demoStore.writeDb(db);

    return {
      ok: true,
      user: this.sanitizeUser(user),
      message: "Внутрибанковский перевод проведён и отражён в журнале операций.",
    };
  },
  async payService({ login, sourceIndex, provider, account, amount, category }) {
    await this.delay(650);

    const db = demoStore.readDb();
    const user = this.getRawUser(login, db);
    const numericAmount = Number(amount);

    if (!user) {
      return { ok: false, error: "Пользователь не найден." };
    }

    if (!provider.trim() || !account.trim()) {
      return {
        ok: false,
        error: "Заполните поставщика услуги и номер лицевого счёта.",
      };
    }

    if (!numericAmount || numericAmount <= 0) {
      return { ok: false, error: "Введите корректную сумму оплаты." };
    }

    if (numericAmount > user.metrics.availableBalance) {
      return { ok: false, error: "Недостаточно средств для оплаты услуги." };
    }

    const productIndex = Number(sourceIndex);
    const sourceProduct = user.products[productIndex];

    if (sourceProduct) {
      sourceProduct.amount = Math.max(sourceProduct.amount - numericAmount, 0);
    }

    user.metrics.totalBalance = Math.max(user.metrics.totalBalance - numericAmount, 0);
    user.metrics.availableBalance = Math.max(user.metrics.availableBalance - numericAmount, 0);
    user.metrics.monthTurnover += numericAmount;

    user.operations.unshift({
      title: `Оплата услуги — ${provider}`,
      date: "28.02.2026",
      time: "19:46",
      amount: `−${formatCurrency(numericAmount)}`,
      status: "Исполнено",
      channel: "Платежи",
      category,
    });
    user.operations = user.operations.slice(0, 8);

    demoStore.writeDb(db);

    return {
      ok: true,
      user: this.sanitizeUser(user),
      message: "Платёж принят в обработку и добавлен в историю операций.",
    };
  },
  async generateStatement({ user, sourceIndex, period }) {
    await this.delay(320);

    const sourceProduct = user.products[Number(sourceIndex)];

    if (!sourceProduct) {
      return { ok: false, error: "Продукт для выписки не найден." };
    }

    const items =
      period === "10d"
        ? user.operations.slice(0, 2)
        : period === "90d"
        ? user.operations.slice(0, 6)
        : user.operations.slice(0, 4);

    return {
      ok: true,
      statement: {
        title: sourceProduct.title,
        number: sourceProduct.number,
        period,
        createdAt: "28.02.2026, 19:49",
        items,
      },
    };
  },
  async blockFirstCard(login) {
    await this.delay(250);

    const db = demoStore.readDb();
    const user = this.getRawUser(login, db);

    if (!user) {
      return { ok: false, error: "Пользователь не найден." };
    }

    const cardIndex = user.products.findIndex((product) => product.kind === "Карта");

    if (cardIndex === -1) {
      return {
        ok: false,
        error: "Для этого профиля нет карты, доступной для быстрой блокировки.",
      };
    }

    user.products[cardIndex].status = "Временно заблокирована";
    demoStore.writeDb(db);

    return {
      ok: true,
      user: this.sanitizeUser(user),
      cardIndex,
      message: "Карта временно заблокирована. Статус обновлён в деталях продукта.",
    };
  },
};

function formatCurrency(value) {
  return `${new Intl.NumberFormat("ru-RU").format(value)} ₽`;
}

function UserDashboardView({ user, authMethod, onLogout, onResetDemo }) {
  const [sessionUser, setSessionUser] = useState(user);
  const [activeWorkspace, setActiveWorkspace] = useState("transfer");
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [workspaceMessage, setWorkspaceMessage] = useState("");
  const [generatedStatement, setGeneratedStatement] = useState(null);
  const [isWorkspaceLoading, setIsWorkspaceLoading] = useState(false);
  const [showSensitiveAmounts, setShowSensitiveAmounts] = useState(true);
  const [securitySettings, setSecuritySettings] = useState({
    confirmTransfers: true,
    pushAlerts: true,
    biometrics: user.authMethods.includes("biometric"),
  });
  const [transferForm, setTransferForm] = useState({
    sourceIndex: 0,
    recipient: "",
    amount: "",
    comment: "",
  });
  const [paymentForm, setPaymentForm] = useState({
    sourceIndex: 0,
    provider: "",
    account: "",
    amount: "",
    category: "Связь",
  });
  const [statementForm, setStatementForm] = useState({
    sourceIndex: 0,
    period: "30d",
  });

  const toneClasses =
    sessionUser.dashboardTone === "premium"
      ? "from-white/[0.09] via-white/[0.04] to-white/[0.02]"
      : sessionUser.dashboardTone === "business"
      ? "from-slate-200/[0.07] via-slate-100/[0.03] to-white/[0.02]"
      : "from-white/[0.07] via-white/[0.03] to-white/[0.015]";

  const selectedProduct =
    sessionUser.products[selectedProductIndex] || sessionUser.products[0];

  const actionButtons = [
    { key: "transfer", label: "Перевести", icon: <TransferIcon className="h-4 w-4" /> },
    { key: "payment", label: "Оплатить", icon: <WalletIcon className="h-4 w-4" /> },
    { key: "statement", label: "Выписка", icon: <StatementIcon className="h-4 w-4" /> },
    { key: "security", label: "Безопасность", icon: <ShieldCheck className="h-4 w-4" /> },
  ];

  const maskAmount = (value) =>
    showSensitiveAmounts ? formatCurrency(value) : "•••••• ₽";

  const handleTransferSubmit = async (event) => {
    event.preventDefault();
    setIsWorkspaceLoading(true);
    setWorkspaceMessage("");

    const result = await demoBankApi.transfer({
      login: sessionUser.login,
      sourceIndex: transferForm.sourceIndex,
      recipient: transferForm.recipient,
      amount: transferForm.amount,
    });

    setIsWorkspaceLoading(false);

    if (!result.ok) {
      setWorkspaceMessage(result.error);
      return;
    }

    setSessionUser(result.user);
    setTransferForm({ sourceIndex: 0, recipient: "", amount: "", comment: "" });
    setWorkspaceMessage(result.message);
  };

  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    setIsWorkspaceLoading(true);
    setWorkspaceMessage("");

    const result = await demoBankApi.payService({
      login: sessionUser.login,
      sourceIndex: paymentForm.sourceIndex,
      provider: paymentForm.provider,
      account: paymentForm.account,
      amount: paymentForm.amount,
      category: paymentForm.category,
    });

    setIsWorkspaceLoading(false);

    if (!result.ok) {
      setWorkspaceMessage(result.error);
      return;
    }

    setSessionUser(result.user);
    setPaymentForm({
      sourceIndex: 0,
      provider: "",
      account: "",
      amount: "",
      category: "Связь",
    });
    setWorkspaceMessage(result.message);
  };

  const handleGenerateStatement = async (event) => {
    event.preventDefault();
    setIsWorkspaceLoading(true);
    setWorkspaceMessage("");

    const result = await demoBankApi.generateStatement({
      user: sessionUser,
      sourceIndex: statementForm.sourceIndex,
      period: statementForm.period,
    });

    setIsWorkspaceLoading(false);

    if (!result.ok) {
      setWorkspaceMessage(result.error);
      return;
    }

    setGeneratedStatement(result.statement);
    setWorkspaceMessage("Выписка сформирована. Предпросмотр доступен в рабочей панели.");
  };

  const handleSecurityAction = async (actionKey) => {
    if (actionKey === "terminateSessions") {
      setWorkspaceMessage(
        "Все дополнительные сессии завершены. Активной оставлена только текущая."
      );
      return;
    }

    if (actionKey === "toggleBalance") {
      const nextValue = !showSensitiveAmounts;
      setShowSensitiveAmounts(nextValue);
      setWorkspaceMessage(
        nextValue
          ? "Суммы снова отображаются в интерфейсе."
          : "Суммы скрыты в интерфейсе текущей сессии."
      );
      return;
    }

    if (actionKey === "blockCard") {
      setIsWorkspaceLoading(true);
      const result = await demoBankApi.blockFirstCard(sessionUser.login);
      setIsWorkspaceLoading(false);

      if (!result.ok) {
        setWorkspaceMessage(result.error);
        return;
      }

      setSessionUser(result.user);
      setSelectedProductIndex(result.cardIndex);
      setWorkspaceMessage(result.message);
    }
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#090b10] text-white"
      style={{ fontFamily: '"Inter Tight", "Inter", system-ui, sans-serif' }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#06070a_0%,#0f131a_32%,#171d26_54%,#10141b_76%,#07080b_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,255,255,0.07),transparent_22%),radial-gradient(circle_at_78%_18%,rgba(148,163,184,0.12),transparent_24%),radial-gradient(circle_at_74%_74%,rgba(255,255,255,0.04),transparent_24%)]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b border-white/8 bg-white/[0.025] backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Landmark className="h-5 w-5 text-slate-100" />
              </div>
              <div>
                <div className="text-[15px] font-medium text-slate-50">Aurelia Bank</div>
                <div className="text-[12px] font-light text-slate-400">Панель клиента</div>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-[12px] font-light text-slate-300 lg:flex">
              <a href="#" className="transition hover:text-white">Обзор</a>
              <a href="#" className="transition hover:text-white">Платежи</a>
              <a href="#" className="transition hover:text-white">Продукты</a>
              <a href="#" className="transition hover:text-white">Документы</a>
              <a href="#" className="transition hover:text-white">Безопасность</a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <div className="flex items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-3 py-2 text-[12px] font-light text-slate-400">
                <SearchUiIcon className="h-4 w-4" />
                Поиск по платежам и продуктам
              </div>
              <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/[0.03] text-slate-200 transition hover:border-white/12 hover:bg-white/[0.05]">
                <NotificationIcon className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-slate-200" />
              </button>
            </div>

            <div className="flex items-center gap-3 text-right">
              <div>
                <div className="text-[13px] font-medium text-white">{sessionUser.fullName}</div>
                <div className="text-[11px] font-light text-slate-400">
                  {sessionUser.segment} • {sessionUser.geo} • вход через {authLabels[authMethod]}
                </div>
              </div>
              <button
                type="button"
                onClick={onLogout}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-[12px] font-medium text-slate-200 transition hover:border-white/14 hover:bg-white/[0.05]"
              >
                Выйти
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-5 py-8 lg:px-8">
          <section className={`rounded-[22px] border border-white/10 bg-gradient-to-b ${toneClasses} p-6 shadow-2xl shadow-black/30`}>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.08em] text-slate-200">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Защищённая сессия активна
                </div>

                <h1 className="mt-4 text-[28px] font-medium leading-tight text-white">
                  Добро пожаловать, {sessionUser.fullName}
                </h1>
                <p className="mt-2 max-w-2xl text-[13px] font-light leading-6 text-slate-300">
                  Учебный контур работает полностью во фронте: действия проходят через сервисный слой, а состояние сохраняется в браузере между перезагрузками.
                </p>

                <div className="mt-5 grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
                      Доступно
                    </div>
                    <div className="mt-2 text-[22px] font-medium text-white">
                      {maskAmount(sessionUser.metrics.availableBalance)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
                      В резерве
                    </div>
                    <div className="mt-2 text-[22px] font-medium text-white">
                      {maskAmount(sessionUser.metrics.reservedBalance)}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
                    <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
                      Оборот за месяц
                    </div>
                    <div className="mt-2 text-[22px] font-medium text-white">
                      {maskAmount(sessionUser.metrics.monthTurnover)}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                  <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">
                    Общий баланс
                  </div>
                  <div className="mt-2 text-[30px] font-medium text-white">
                    {maskAmount(sessionUser.metrics.totalBalance)}
                  </div>
                  <div className="mt-1 text-[12px] font-light text-slate-400">
                    Контур: {sessionUser.segment} • Гео профиля: {sessionUser.geo}
                  </div>
                </div>

                {actionButtons.map((action) => (
                  <button
                    key={action.key}
                    type="button"
                    onClick={() => setActiveWorkspace(action.key)}
                    className={`flex items-center gap-2 rounded-2xl border px-4 py-3 text-[13px] font-medium transition ${
                      activeWorkspace === action.key
                        ? "border-white/14 bg-white/[0.08] text-white"
                        : "border-white/8 bg-white/[0.035] text-slate-100 hover:border-white/12 hover:bg-white/[0.05]"
                    }`}
                  >
                    {action.icon}
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Продукты и счета</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Нажмите на продукт, чтобы открыть расширенные детали справа
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100">
                    <WalletIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {sessionUser.products.map((product, index) => (
                    <button
                      key={`${product.title}-${product.number}`}
                      type="button"
                      onClick={() => setSelectedProductIndex(index)}
                      className={`rounded-2xl border bg-black/20 p-4 text-left transition ${
                        selectedProductIndex === index
                          ? "border-white/16 bg-white/[0.06]"
                          : "border-white/8 hover:border-white/12 hover:bg-black/25"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-300">
                          {product.kind}
                        </div>
                        <div className="text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500">
                          {product.status}
                        </div>
                      </div>
                      <div className="mt-3 text-[14px] font-medium text-white">{product.title}</div>
                      <div className="mt-1 text-[11px] font-light text-slate-500">{product.number}</div>
                      <div className="mt-4 text-[22px] font-medium text-white">
                        {maskAmount(product.amount)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Последние операции</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Журнал операций по основным каналам обслуживания
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100">
                    <TransferIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 overflow-hidden rounded-2xl border border-white/8 bg-black/20">
                  <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr] gap-3 border-b border-white/8 px-4 py-3 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500">
                    <div>Операция</div>
                    <div>Канал</div>
                    <div>Сумма</div>
                    <div>Статус</div>
                  </div>

                  {sessionUser.operations.map((operation) => (
                    <div
                      key={`${operation.title}-${operation.date}-${operation.time}`}
                      className="grid grid-cols-[1.6fr_0.7fr_0.7fr_0.8fr] gap-3 border-b border-white/8 px-4 py-3 last:border-b-0"
                    >
                      <div>
                        <div className="text-[13px] font-medium text-slate-100">{operation.title}</div>
                        <div className="mt-1 text-[11px] font-light text-slate-500">
                          {operation.date}, {operation.time} • {operation.category}
                        </div>
                      </div>
                      <div className="text-[12px] font-light text-slate-400">{operation.channel}</div>
                      <div className="text-[12px] font-medium text-white">
                        {showSensitiveAmounts ? operation.amount : "•••••• ₽"}
                      </div>
                      <div className="text-[12px] font-light text-slate-400">{operation.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Рабочая панель</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Учебные операции без отдельного сервера
                    </div>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg border border-white/8 bg-black/20 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-300">
                    {actionButtons.find((item) => item.key === activeWorkspace)?.label}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {actionButtons.map((action) => (
                    <button
                      key={action.key}
                      type="button"
                      onClick={() => setActiveWorkspace(action.key)}
                      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-[11px] font-medium uppercase tracking-[0.06em] transition ${
                        activeWorkspace === action.key
                          ? "border-white/14 bg-white/[0.07] text-white"
                          : "border-white/8 bg-black/20 text-slate-300 hover:border-white/12 hover:text-white"
                      }`}
                    >
                      {action.icon}
                      {action.label}
                    </button>
                  ))}
                </div>

                <div className="mt-4 rounded-2xl border border-white/8 bg-black/20 p-4">
                  {activeWorkspace === "transfer" ? (
                    <form className="space-y-3" onSubmit={handleTransferSubmit}>
                      <div className="text-[13px] font-medium text-white">Внутрибанковский перевод</div>
                      <select
                        value={transferForm.sourceIndex}
                        onChange={(e) => setTransferForm((prev) => ({ ...prev, sourceIndex: e.target.value }))}
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none"
                      >
                        {sessionUser.products.map((product, index) => (
                          <option key={`${product.title}-${index}`} value={index} className="bg-slate-900">
                            {product.title}
                          </option>
                        ))}
                      </select>
                      <input
                        value={transferForm.recipient}
                        onChange={(e) => setTransferForm((prev) => ({ ...prev, recipient: e.target.value }))}
                        placeholder="Получатель внутри банка"
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none placeholder:text-slate-500"
                      />
                      <input
                        value={transferForm.amount}
                        onChange={(e) => setTransferForm((prev) => ({ ...prev, amount: e.target.value }))}
                        placeholder="Сумма перевода"
                        type="number"
                        min="0"
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none placeholder:text-slate-500"
                      />
                      <input
                        value={transferForm.comment}
                        onChange={(e) => setTransferForm((prev) => ({ ...prev, comment: e.target.value }))}
                        placeholder="Комментарий к переводу"
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none placeholder:text-slate-500"
                      />
                      <button
                        type="submit"
                        disabled={isWorkspaceLoading}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-[12px] font-medium transition ${
                          isWorkspaceLoading
                            ? "cursor-not-allowed border-white/8 bg-white/[0.03] text-slate-500"
                            : "border-white/12 bg-white/[0.08] text-white hover:border-white/16"
                        }`}
                      >
                        <TransferIcon className="h-4 w-4" />
                        {isWorkspaceLoading ? "Проводим перевод" : "Провести перевод"}
                      </button>
                    </form>
                  ) : null}

                  {activeWorkspace === "payment" ? (
                    <form className="space-y-3" onSubmit={handlePaymentSubmit}>
                      <div className="text-[13px] font-medium text-white">Оплата услуг</div>
                      <select
                        value={paymentForm.sourceIndex}
                        onChange={(e) => setPaymentForm((prev) => ({ ...prev, sourceIndex: e.target.value }))}
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none"
                      >
                        {sessionUser.products.map((product, index) => (
                          <option key={`${product.title}-${index}`} value={index} className="bg-slate-900">
                            {product.title}
                          </option>
                        ))}
                      </select>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <input
                          value={paymentForm.provider}
                          onChange={(e) => setPaymentForm((prev) => ({ ...prev, provider: e.target.value }))}
                          placeholder="Поставщик услуги"
                          className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none placeholder:text-slate-500"
                        />
                        <input
                          value={paymentForm.account}
                          onChange={(e) => setPaymentForm((prev) => ({ ...prev, account: e.target.value }))}
                          placeholder="Лицевой счёт"
                          className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none placeholder:text-slate-500"
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <select
                          value={paymentForm.category}
                          onChange={(e) => setPaymentForm((prev) => ({ ...prev, category: e.target.value }))}
                          className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none"
                        >
                          {["Связь", "Интернет", "ЖКХ", "Подписки"].map((category) => (
                            <option key={category} value={category} className="bg-slate-900">
                              {category}
                            </option>
                          ))}
                        </select>
                        <input
                          value={paymentForm.amount}
                          onChange={(e) => setPaymentForm((prev) => ({ ...prev, amount: e.target.value }))}
                          placeholder="Сумма оплаты"
                          type="number"
                          min="0"
                          className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none placeholder:text-slate-500"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isWorkspaceLoading}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-[12px] font-medium transition ${
                          isWorkspaceLoading
                            ? "cursor-not-allowed border-white/8 bg-white/[0.03] text-slate-500"
                            : "border-white/12 bg-white/[0.08] text-white hover:border-white/16"
                        }`}
                      >
                        <WalletIcon className="h-4 w-4" />
                        {isWorkspaceLoading ? "Проводим оплату" : "Оплатить услугу"}
                      </button>
                    </form>
                  ) : null}

                  {activeWorkspace === "statement" ? (
                    <form className="space-y-3" onSubmit={handleGenerateStatement}>
                      <div className="text-[13px] font-medium text-white">Формирование выписки</div>
                      <select
                        value={statementForm.sourceIndex}
                        onChange={(e) => setStatementForm((prev) => ({ ...prev, sourceIndex: e.target.value }))}
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none"
                      >
                        {sessionUser.products.map((product, index) => (
                          <option key={`${product.title}-${index}`} value={index} className="bg-slate-900">
                            {product.title}
                          </option>
                        ))}
                      </select>
                      <select
                        value={statementForm.period}
                        onChange={(e) => setStatementForm((prev) => ({ ...prev, period: e.target.value }))}
                        className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-white outline-none"
                      >
                        <option value="10d" className="bg-slate-900">За 10 дней</option>
                        <option value="30d" className="bg-slate-900">За 30 дней</option>
                        <option value="90d" className="bg-slate-900">За 90 дней</option>
                      </select>
                      <button
                        type="submit"
                        disabled={isWorkspaceLoading}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-[12px] font-medium transition ${
                          isWorkspaceLoading
                            ? "cursor-not-allowed border-white/8 bg-white/[0.03] text-slate-500"
                            : "border-white/12 bg-white/[0.08] text-white hover:border-white/16"
                        }`}
                      >
                        <StatementIcon className="h-4 w-4" />
                        {isWorkspaceLoading ? "Формируем выписку" : "Сформировать выписку"}
                      </button>

                      {generatedStatement ? (
                        <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4 text-[12px] font-light text-slate-300">
                          <div className="text-[12px] font-medium text-white">Предпросмотр выписки</div>
                          <div className="mt-2 text-slate-400">
                            {generatedStatement.title} • {generatedStatement.number}
                          </div>
                          <div className="mt-1 text-slate-500">
                            Сформирована: {generatedStatement.createdAt}
                          </div>
                          <div className="mt-3 space-y-2">
                            {generatedStatement.items.map((item) => (
                              <div key={`${item.title}-${item.time}`} className="rounded-lg border border-white/8 bg-black/20 px-3 py-2">
                                <div className="text-[12px] font-medium text-slate-100">{item.title}</div>
                                <div className="mt-1 flex items-center justify-between gap-3 text-[11px] font-light text-slate-500">
                                  <span>{item.date}, {item.time}</span>
                                  <span>{showSensitiveAmounts ? item.amount : "•••••• ₽"}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}
                    </form>
                  ) : null}

                  {activeWorkspace === "security" ? (
                    <div className="space-y-3">
                      <div className="text-[13px] font-medium text-white">Настройки безопасности</div>
                      <label className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-slate-300">
                        <span>Подтверждать переводы</span>
                        <input
                          type="checkbox"
                          checked={securitySettings.confirmTransfers}
                          onChange={(e) => setSecuritySettings((prev) => ({ ...prev, confirmTransfers: e.target.checked }))}
                          className="h-4 w-4 rounded border-white/20 bg-black/20"
                        />
                      </label>
                      <label className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-slate-300">
                        <span>Push-уведомления о входах</span>
                        <input
                          type="checkbox"
                          checked={securitySettings.pushAlerts}
                          onChange={(e) => setSecuritySettings((prev) => ({ ...prev, pushAlerts: e.target.checked }))}
                          className="h-4 w-4 rounded border-white/20 bg-black/20"
                        />
                      </label>
                      <label className="flex items-center justify-between gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-slate-300">
                        <span>Разрешить биометрию</span>
                        <input
                          type="checkbox"
                          checked={securitySettings.biometrics}
                          onChange={(e) => setSecuritySettings((prev) => ({ ...prev, biometrics: e.target.checked }))}
                          className="h-4 w-4 rounded border-white/20 bg-black/20"
                        />
                      </label>
                      <div className="grid gap-2 sm:grid-cols-2">
                        <button
                          type="button"
                          onClick={() => handleSecurityAction("toggleBalance")}
                          className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-medium text-slate-100 transition hover:border-white/12 hover:bg-white/[0.05]"
                        >
                          {showSensitiveAmounts ? "Скрыть суммы" : "Показать суммы"}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleSecurityAction("terminateSessions")}
                          className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-medium text-slate-100 transition hover:border-white/12 hover:bg-white/[0.05]"
                        >
                          Завершить другие сессии
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleSecurityAction("blockCard")}
                        disabled={isWorkspaceLoading}
                        className={`w-full rounded-xl border px-4 py-3 text-[12px] font-medium transition ${
                          isWorkspaceLoading
                            ? "cursor-not-allowed border-white/8 bg-white/[0.03] text-slate-500"
                            : "border-red-400/25 bg-red-500/[0.06] text-red-100 hover:border-red-400/35"
                        }`}
                      >
                        Временно заблокировать карту
                      </button>
                    </div>
                  ) : null}
                </div>

                {workspaceMessage ? (
                  <div className="mt-4 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-slate-300">
                    {workspaceMessage}
                  </div>
                ) : null}
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Детали продукта</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Карта, счёт, вклад или кредит в расширенном представлении
                    </div>
                  </div>
                  <div className="rounded-lg border border-white/8 bg-black/20 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-slate-300">
                    {selectedProduct.kind}
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-[12px] font-light text-slate-300">
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Название</div>
                    <div className="mt-1 text-slate-100">{selectedProduct.title}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Реквизит / идентификатор</div>
                    <div className="mt-1 text-slate-100">{selectedProduct.number}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Текущий баланс / остаток</div>
                    <div className="mt-1 text-slate-100">{maskAmount(selectedProduct.amount)}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Статус</div>
                    <div className="mt-1 text-slate-100">{selectedProduct.status}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-slate-400">
                    Доступны действия: перевод, оплата, выписка и контроль безопасности в рамках текущего сеанса.
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Ближайшие задачи</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Платежи и регулярные списания
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100">
                    <StatementIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {sessionUser.upcomingPayments.map((item) => (
                    <div
                      key={`${item.title}-${item.due}`}
                      className="rounded-xl border border-white/8 bg-black/20 px-4 py-3"
                    >
                      <div className="text-[13px] font-medium text-slate-100">{item.title}</div>
                      <div className="mt-1 flex items-center justify-between gap-3 text-[11px] font-light text-slate-500">
                        <span>Срок: {item.due}</span>
                        <span>{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Профиль и доступ</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Клиентские данные, методы входа и управление демо-средой
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100">
                    <User className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-[12px] font-light text-slate-300">
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Клиент</div>
                    <div className="mt-1 text-slate-100">{sessionUser.fullName}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Email</div>
                    <div className="mt-1 text-slate-100">{sessionUser.email}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-slate-500">Регион обслуживания</div>
                    <div className="mt-1 text-slate-100">{sessionUser.geo}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sessionUser.authMethods.map((method) => (
                      <span
                        key={method}
                        className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-black/20 px-3 py-2 text-[11px] font-medium uppercase tracking-[0.06em] text-slate-200"
                      >
                        {method === "biometric" ? (
                          <BiometricIcon className="h-3.5 w-3.5" />
                        ) : (
                          <BadgeCheck className="h-3.5 w-3.5" />
                        )}
                        {authLabels[method]}
                      </span>
                    ))}
                  </div>
                  <button
                    type="button"
                    onClick={onResetDemo}
                    className="w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-medium text-slate-100 transition hover:border-white/12 hover:bg-white/[0.05]"
                  >
                    Сбросить учебные данные
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Безопасность и лимиты</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Проверка доступа и параметры текущей сессии
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100">
                    <AlertIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 space-y-3 text-[12px] font-light text-slate-300">
                  <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/[0.06] px-4 py-3 text-emerald-100">
                    Вход подтверждён. Уровень риска: {sessionUser.security.riskLevel}. Подозрительных действий в текущей сессии не зафиксировано.
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <DeviceIcon className="h-3.5 w-3.5" />
                      Активное устройство
                    </div>
                    <div className="mt-1 text-slate-100">{sessionUser.security.activeDevice}</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    Последний подтверждённый вход: {sessionUser.security.lastVerifiedLogin}
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    Контур авторизации: {authLabels[authMethod]} • Лимит сессии: {sessionUser.security.sessionLimit}
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[16px] font-medium text-white">Рыночные индикаторы</div>
                    <div className="mt-1 text-[12px] font-light text-slate-400">
                      Ориентиры для быстрых решений
                    </div>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-100">
                    <TrendIcon className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">USD</div>
                    <div className="mt-1 text-[16px] font-medium text-white">91.84</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">EUR</div>
                    <div className="mt-1 text-[16px] font-medium text-white">99.46</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3">
                    <div className="text-[11px] font-medium uppercase tracking-[0.08em] text-slate-500">Доходность</div>
                    <div className="mt-1 text-[16px] font-medium text-white">до 8.6%</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default function AureliaBankLoginScreen() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [rememberFor24h, setRememberFor24h] = useState(false);
  const [maskPassword, setMaskPassword] = useState(true);
  const [loginTouched, setLoginTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [formError, setFormError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeUser, setActiveUser] = useState(null);
  const [activeAuthMethod, setActiveAuthMethod] = useState("password");

  const noiseSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='0.09'/%3E%3C/svg%3E")`;

  const benefits = [
    {
      title: "Надёжная защита",
      value: "256-битное шифрование",
      text: "Контроль сессий, подтверждение входа и мониторинг подозрительной активности 24/7.",
      icon: <ProtectionIcon className="h-4 w-4" />,
    },
    {
      title: "Быстрый доступ",
      value: "до 12 секунд до входа",
      text: "Авторизация по сохранённой сессии, ЕСИА, биометрии и привычным цифровым каналам.",
      icon: <AccessIcon className="h-4 w-4" />,
    },
    {
      title: "Единая экосистема",
      value: "18+ сервисов в одном кабинете",
      text: "Карты, счета, переводы, вклады, бизнес-платежи и поддержка — без отдельной навигации.",
      icon: <EcosystemIcon className="h-4 w-4" />,
    },
  ];

  const matchedUser = useMemo(() => demoBankApi.getUserByLogin(login), [login]);

  useEffect(() => {
    const restored = demoBankApi.restoreSession();

    if (!restored) return;

    setActiveUser(restored.user);
    setActiveAuthMethod(restored.authMethod);
  }, []);

  const loginError = useMemo(() => {
    if (!loginTouched) return "";
    if (!login.trim()) return "Введите логин для входа.";
    if (login.trim().length < 3) return "Логин должен содержать не менее 3 символов.";
    return "";
  }, [login, loginTouched]);

  const passwordError = useMemo(() => {
    if (!passwordTouched) return "";
    if (!password) return "Введите пароль для входа.";
    if (password.length < 6) return "Пароль должен содержать не менее 6 символов.";
    return "";
  }, [password, passwordTouched]);

  const isFormInvalid =
    !login.trim() || !password || Boolean(loginError) || Boolean(passwordError);

  const inputBaseClass =
    "flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-200";

  const availableMethods = demoBankApi.getAvailableMethods(login);
  const authAvailability = {
    esia: availableMethods.includes("esia"),
    vk: availableMethods.includes("vk"),
    biometric: availableMethods.includes("biometric"),
  };

  const resetToLogin = () => {
    demoBankApi.logout();
    setActiveUser(null);
    setActiveAuthMethod("password");
    setPassword("");
    setPasswordTouched(false);
    setFormError("");
    setIsLoading(false);
  };

  const handleResetDemoData = () => {
    demoBankApi.resetDemoData();
    setActiveUser(null);
    setActiveAuthMethod("password");
    setLogin("");
    setPassword("");
    setRememberFor24h(false);
    setLoginTouched(false);
    setPasswordTouched(false);
    setFormError("Учебные данные сброшены. Можно начать заново.");
    setIsLoading(false);
  };

  const handleSuccess = (user, method) => {
    setIsLoading(false);
    setFormError("");
    setActiveUser(user);
    setActiveAuthMethod(method);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoginTouched(true);
    setPasswordTouched(true);

    if (isFormInvalid) {
      setFormError("Проверьте корректность логина и пароля перед входом.");
      return;
    }

    setFormError("");
    setIsLoading(true);

    const result = await demoBankApi.authenticateWithPassword(
      login,
      password,
      rememberFor24h
    );

    if (!result.ok) {
      setIsLoading(false);
      setFormError(result.error);
      return;
    }

    handleSuccess(result.user, "password");
  };

  const handleMethodAuth = async (method) => {
    setLoginTouched(true);

    if (!login.trim()) {
      setFormError("Сначала введите логин, чтобы определить доступные способы входа.");
      return;
    }

    setFormError("");
    setIsLoading(true);

    const result = await demoBankApi.authenticateWithMethod(
      login,
      method,
      rememberFor24h
    );

    if (!result.ok) {
      setIsLoading(false);
      setFormError(result.error);
      return;
    }

    handleSuccess(result.user, method);
  };

  if (activeUser) {
    return (
      <UserDashboardView
        user={activeUser}
        authMethod={activeAuthMethod}
        onLogout={resetToLogin}
        onResetDemo={handleResetDemoData}
      />
    );
  }

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-[#090b10] text-white"
      style={{ fontFamily: '"Inter Tight", "Inter", system-ui, sans-serif' }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 14% 18%, rgba(255,255,255,0.08), transparent 22%)",
            "radial-gradient(circle at 78% 16%, rgba(148,163,184,0.12), transparent 24%)",
            "radial-gradient(circle at 72% 76%, rgba(226,232,240,0.06), transparent 26%)",
            "linear-gradient(135deg, #06070a 0%, #0d1117 26%, #171c25 52%, #11161f 74%, #08090c 100%)",
          ].join(", "),
        }}
      />

      <div
        className="absolute inset-0 mix-blend-soft-light opacity-60"
        style={{ backgroundImage: noiseSvg }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.36)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b border-white/8 bg-white/[0.025] backdrop-blur-xl">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/20">
                <Landmark className="h-5 w-5 text-slate-100" />
              </div>
              <div>
                <div className="text-[15px] font-medium tracking-[0.02em] text-slate-50">
                  Aurelia Bank
                </div>
                <div className="text-[12px] font-light text-slate-300">
                  Спокойствие в каждой транзакции
                </div>
                <div className="text-[11px] font-light uppercase tracking-[0.18em] text-slate-400">
                  Private, Retail &amp; Business Banking
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-5 text-[13px] font-light text-slate-300 lg:flex">
              <a href="#" className="transition hover:text-white">Частным лицам</a>
              <a href="#" className="transition hover:text-white">Бизнесу</a>
              <a href="#" className="transition hover:text-white">Premium</a>
              <a href="#" className="transition hover:text-white">Инвестиции</a>
              <a href="#" className="transition hover:text-white">О банке</a>
              <a href="#" className="transition hover:text-white">Поддержка</a>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-[13px] font-medium text-slate-100 transition hover:bg-white/[0.06]">
                Стать клиентом
              </button>
              <button className="rounded-xl border border-white/12 bg-gradient-to-b from-slate-100 to-slate-300 px-4 py-2.5 text-[13px] font-medium text-slate-950 transition hover:brightness-105">
                Открыть счёт
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-1 items-center px-5 py-10 lg:px-8 lg:py-14">
          <div className="grid w-full items-center gap-9 lg:grid-cols-[1.06fr_0.94fr]">
            <motion.section
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-2xl"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-[12px] font-medium text-slate-200">
                <ShieldCheck className="h-4 w-4" />
                Защищённая зона доступа
              </div>

              <h1 className="max-w-xl text-[28px] font-medium leading-[1.14] text-white md:text-[28px]">
                Добро пожаловать в личный кабинет Aurelia Bank
              </h1>

              <p className="mt-4 max-w-xl text-[14px] font-light leading-6 text-slate-300">
                Это обучающий прототип: логика авторизации и операций имитирует backend, но всё хранится во фронте и сохраняется в браузере как учебная база данных.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {benefits.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/8 bg-white/[0.04] p-4 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-2 text-slate-100">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
                        {item.icon}
                      </div>
                      <div className="text-[13px] font-medium leading-5">{item.title}</div>
                    </div>
                    <div className="mt-3 text-[12px] font-medium uppercase tracking-[0.08em] text-slate-200">
                      {item.value}
                    </div>
                    <p className="mt-2 text-[12px] font-light leading-5 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-[22px] bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent blur-2xl" />

              <div className="relative rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.025))] p-5 shadow-2xl shadow-black/30 backdrop-blur-2xl md:p-7">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[24px] font-medium text-white">Вход в систему</div>
                    <div className="mt-1.5 text-[12px] font-light text-slate-400">
                      Авторизация в защищённом цифровом контуре банка
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                    <ShieldCheck className="h-4 w-4 text-slate-100" />
                  </div>
                </div>

                <div className="mb-4 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-slate-300">
                  <span className="font-medium text-slate-100">Последний вход:</span>{" "}
                  27.02.2026, 18:42, Москва
                  <span className="mx-2 text-slate-500">•</span>
                  <span className="text-slate-400">TLS 1.3 / Device Check</span>
                </div>

                <form className="space-y-3.5" onSubmit={handleSubmit}>
                  <label className="block">
                    <span className="mb-2 block text-[12px] font-medium uppercase tracking-[0.08em] text-slate-300">
                      Логин
                    </span>
                    <div
                      className={`${inputBaseClass} ${
                        loginError
                          ? "border-red-400/55 bg-red-500/[0.06]"
                          : "border-white/10 bg-black/20 hover:border-white/15 hover:bg-black/25 focus-within:border-white/20 focus-within:bg-black/25 focus-within:ring-2 focus-within:ring-white/10"
                      }`}
                    >
                      <User className={`h-4 w-4 ${loginError ? "text-red-300" : "text-slate-500"}`} />
                      <input
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        onBlur={() => setLoginTouched(true)}
                        type="text"
                        placeholder="Введите логин"
                        autoComplete="username"
                        className="w-full bg-transparent text-[14px] font-light text-white outline-none placeholder:text-slate-500"
                      />
                    </div>
                    {loginError ? (
                      <div className="mt-1.5 text-[11px] font-light text-red-300">{loginError}</div>
                    ) : null}
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-[12px] font-medium uppercase tracking-[0.08em] text-slate-300">
                      Пароль
                    </span>
                    <div
                      className={`${inputBaseClass} ${
                        passwordError
                          ? "border-red-400/55 bg-red-500/[0.06]"
                          : "border-white/10 bg-black/20 hover:border-white/15 hover:bg-black/25 focus-within:border-white/20 focus-within:bg-black/25 focus-within:ring-2 focus-within:ring-white/10"
                      }`}
                    >
                      <Lock className={`h-4 w-4 ${passwordError ? "text-red-300" : "text-slate-500"}`} />
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={() => setPasswordTouched(true)}
                        type={maskPassword ? "password" : "text"}
                        placeholder="Введите пароль"
                        autoComplete="current-password"
                        className="w-full bg-transparent text-[14px] font-light text-white outline-none placeholder:text-slate-500"
                      />
                    </div>
                    {passwordError ? (
                      <div className="mt-1.5 text-[11px] font-light text-red-300">{passwordError}</div>
                    ) : null}
                  </label>

                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] font-light text-slate-400">
                    <a href="#" className="transition hover:text-white">Забыли пароль?</a>
                    <a href="#" className="transition hover:text-white">Восстановить доступ</a>
                    <a href="#" className="transition hover:text-white">Войти по номеру карты / договору</a>
                  </div>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-[12px] font-light text-slate-300 transition hover:border-white/12 hover:bg-white/[0.035]">
                    <input
                      type="checkbox"
                      checked={maskPassword}
                      onChange={(e) => setMaskPassword(e.target.checked)}
                      className="h-4 w-4 rounded border-white/20 bg-black/20"
                    />
                    <span className="flex items-center gap-2">
                      {maskPassword ? (
                        <EyeOff className="h-4 w-4 text-slate-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-slate-400" />
                      )}
                      Скрывать пароль
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3 text-[12px] font-light text-slate-300 transition hover:border-white/12 hover:bg-white/[0.035]">
                    <input
                      type="checkbox"
                      checked={rememberFor24h}
                      onChange={(e) => setRememberFor24h(e.target.checked)}
                      className="h-4 w-4 rounded border-white/20 bg-black/20"
                    />
                    <span>Сохранить данные для входа на 24 часа</span>
                  </label>

                  <div className="text-[11px] font-light text-slate-500">
                    Не используйте сохранение входа на общедоступных устройствах.
                  </div>

                  {matchedUser ? (
                    <div className="rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-light text-slate-300">
                      Учётная запись распознана. Доступные методы входа определяются по учебной базе данных.
                    </div>
                  ) : null}

                  {formError ? (
                    <div className="rounded-xl border border-red-400/35 bg-red-500/[0.06] px-4 py-3 text-[12px] font-light text-red-200">
                      {formError}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={isFormInvalid || isLoading}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-[14px] font-medium transition-all duration-200 ${
                      isFormInvalid || isLoading
                        ? "cursor-not-allowed border-white/8 bg-white/[0.04] text-slate-500"
                        : "border-white/12 bg-gradient-to-b from-slate-100 to-slate-300 text-slate-950 hover:-translate-y-[1px] hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                    }`}
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-slate-500/30 border-t-slate-900 animate-spin" />
                        Проверяем доступ
                      </span>
                    ) : (
                      <>
                        <ShieldCheck className="h-4 w-4" />
                        Войти
                        <ChevronRight className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>

                <div className="mt-3 text-[11px] font-light text-slate-500">
                  Учебная среда сохраняет изменения в localStorage браузера.
                </div>

                <button
                  type="button"
                  onClick={handleResetDemoData}
                  className="mt-3 w-full rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3 text-[12px] font-medium text-slate-100 transition hover:border-white/12 hover:bg-white/[0.05]"
                >
                  Сбросить учебные данные
                </button>

                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-white/8" />
                  <span className="text-[11px] font-light uppercase tracking-[0.16em] text-slate-500">
                    Альтернативный вход
                  </span>
                  <div className="h-px flex-1 bg-white/8" />
                </div>

                <div className="grid gap-2.5">
                  <button
                    type="button"
                    disabled={!authAvailability.esia || isLoading}
                    onClick={() => handleMethodAuth("esia")}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-[13px] font-medium transition ${
                      authAvailability.esia && !isLoading
                        ? "border-white/8 bg-white/[0.03] text-slate-100 hover:border-white/12 hover:bg-white/[0.05]"
                        : "cursor-not-allowed border-white/6 bg-white/[0.02] text-slate-500"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-[#1f4f8d]/20 text-slate-100">
                        <BadgeCheck className="h-4 w-4" />
                      </div>
                      Войти через ЕСИА
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </button>

                  <button
                    type="button"
                    disabled={!authAvailability.vk || isLoading}
                    onClick={() => handleMethodAuth("vk")}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-[13px] font-medium transition ${
                      authAvailability.vk && !isLoading
                        ? "border-white/8 bg-white/[0.03] text-slate-100 hover:border-white/12 hover:bg-white/[0.05]"
                        : "cursor-not-allowed border-white/6 bg-white/[0.02] text-slate-500"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-[#204c7d]/20 text-slate-100">
                        <MessageCircle className="h-4 w-4" />
                      </div>
                      Войти через ВКонтакте
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </button>

                  <button
                    type="button"
                    disabled={!authAvailability.biometric || isLoading}
                    onClick={() => handleMethodAuth("biometric")}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 text-[13px] font-medium transition ${
                      authAvailability.biometric && !isLoading
                        ? "border-white/8 bg-white/[0.03] text-slate-100 hover:border-white/12 hover:bg-white/[0.05]"
                        : "cursor-not-allowed border-white/6 bg-white/[0.02] text-slate-500"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/[0.04] text-slate-100">
                        <BiometricIcon className="h-4 w-4" />
                      </div>
                      Войти по биометрии
                    </span>
                    <ChevronRight className="h-4 w-4 text-slate-500" />
                  </button>
                </div>

                <div className="mt-5 rounded-xl border border-white/8 bg-black/20 p-4 text-[12px] font-light leading-5 text-slate-400">
                  Используется защищённое соединение. В учебном режиме данные не уходят на сервер: они живут только в этом браузере.
                </div>
              </div>
            </motion.section>
          </div>
        </main>

        <footer className="border-t border-white/8 bg-black/20 backdrop-blur-xl">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1.15fr_1.15fr] lg:px-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                  <Landmark className="h-5 w-5 text-slate-100" />
                </div>
                <div>
                  <div className="text-[15px] font-medium text-white">Aurelia Bank</div>
                  <div className="text-[12px] font-light text-slate-400">
                    Private, Retail &amp; Business Banking
                  </div>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-[12px] font-light leading-5 text-slate-400">
                Универсальный цифровой банк для частных клиентов, предпринимателей и компаний. Платежи, накопления, кредитные продукты, расчётные сервисы и клиентская поддержка — в единой инфраструктуре.
              </p>
              <div className="mt-4 space-y-1.5 text-[12px] font-light text-slate-500">
                <div>Генеральная лицензия Банка России № 2418 от 14.09.2012</div>
                <div>Участник системы страхования вкладов</div>
                <div>Информация на странице носит демонстрационный характер</div>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-slate-200">
                Продукты
              </div>
              <div className="mt-4 space-y-2.5 text-[12px] font-light text-slate-400">
                <a href="#" className="block transition hover:text-white">Карты и счета</a>
                <a href="#" className="block transition hover:text-white">Вклады и накопления</a>
                <a href="#" className="block transition hover:text-white">Кредиты и овердрафт</a>
                <a href="#" className="block transition hover:text-white">Премиальное обслуживание</a>
                <a href="#" className="block transition hover:text-white">РКО для бизнеса</a>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-slate-200">
                Документы
              </div>
              <div className="mt-4 space-y-2.5 text-[12px] font-light text-slate-400">
                <a href="#" className="block transition hover:text-white">Тарифы и условия</a>
                <a href="#" className="block transition hover:text-white">Раскрытие информации</a>
                <a href="#" className="block transition hover:text-white">Политика безопасности</a>
                <a href="#" className="block transition hover:text-white">Персональные данные</a>
                <a href="#" className="block transition hover:text-white">Комплаенс и AML/KYC</a>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-slate-200">
                Поддержка
              </div>
              <div className="mt-4 space-y-3 text-[12px] font-light text-slate-400">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                  <div>
                    <div>8 800 300-90-24 — круглосуточно</div>
                    <div className="text-slate-500">Премиальная линия: +7 495 980-42-18</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>support@aurelia.bank</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 shrink-0" />
                  <span>security@aurelia.bank</span>
                </div>
                <div className="text-slate-500">Служба антифрода реагирует на инциденты 24/7</div>
              </div>
            </div>

            <div>
              <div className="text-[13px] font-medium uppercase tracking-[0.08em] text-slate-200">
                Реквизиты
              </div>
              <div className="mt-4 space-y-3 text-[12px] font-light text-slate-400">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>123112, Москва, Пресненская набережная, 12, башня B</span>
                </div>
                <div>ИНН 7704125834</div>
                <div>КПП 770401001</div>
                <div>ОГРН 1127700002418</div>
                <div>БИК 044525818</div>
                <div>SWIFT AURBRUMM</div>
                <div>к/с 30101810400000000818</div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/8">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap gap-2 px-5 py-4 lg:px-8">
              {[
                { label: "Курсы валют", icon: <Globe className="h-3.5 w-3.5" /> },
                { label: "Отделения и банкоматы", icon: <MapPin className="h-3.5 w-3.5" /> },
                { label: "Проверка реквизитов", icon: <BadgeCheck className="h-3.5 w-3.5" /> },
                { label: "Сообщить о мошенничестве", icon: <ShieldCheck className="h-3.5 w-3.5" /> },
              ].map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/8 bg-white/[0.025] px-3 py-2 text-[11px] font-light text-slate-300 transition hover:border-white/12 hover:bg-white/[0.04] hover:text-white"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/8 px-5 py-4 text-center text-[11px] font-light text-slate-500 lg:px-8">
            © 2026 Aurelia Bank. Все права защищены. Используя сайт, вы принимаете условия обслуживания, политику обработки данных и правила дистанционного банковского обслуживания.
          </div>
        </footer>
      </div>
    </div>
  );
}
