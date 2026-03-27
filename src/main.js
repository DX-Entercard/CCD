const assetUrl = (path) => new URL(path, import.meta.url).href;

const assets = {
  cardArt: assetUrl("./assets/figma/card-art.svg"),
  cardsDetailArt: assetUrl("./assets/figma/cards-detail-art.svg"),
  checkboxCheck: assetUrl("./assets/figma/checkbox-check.svg"),
  reviewAccount: {
    src: assetUrl("./assets/figma/review-account.svg"),
    width: 19,
    height: 19,
  },
  reviewMail: {
    src: assetUrl("./assets/figma/review-mail.svg"),
    width: 20,
    height: 14,
  },
  success: {
    grips: assetUrl("./assets/figma/success/grips.svg"),
    depth: assetUrl("./assets/figma/success/depth.svg"),
    cup: assetUrl("./assets/figma/success/cup.svg"),
    cupShadow: assetUrl("./assets/figma/success/cup-shadow.svg"),
    stemMask: assetUrl("./assets/figma/success/stem-mask.svg"),
    base: assetUrl("./assets/figma/success/base.svg"),
    baseShadow: assetUrl("./assets/figma/success/base-shadow.svg"),
    tickCircle: assetUrl("./assets/figma/success/tick-circle.svg"),
    tickCircleShadow: assetUrl("./assets/figma/success/tick-circle-shadow.svg"),
    tickStroke: assetUrl("./assets/figma/success/tick-stroke.svg"),
    groundLine: assetUrl("./assets/figma/success/ground-line.svg"),
    starDepth: assetUrl("./assets/figma/success/star-depth.svg"),
    star: assetUrl("./assets/figma/success/star.svg"),
    starShadow: assetUrl("./assets/figma/success/star-shadow.svg"),
    confetti: assetUrl("./assets/figma/success/confetti.svg"),
  },
  agreement: {
    src: assetUrl("./assets/figma/agreement.svg"),
    width: 18,
    height: 13,
    offsetX: 0,
    offsetY: 0.5,
  },
  chevron: {
    src: assetUrl("./assets/figma/chevron.svg"),
    width: 5,
    height: 9,
    offsetX: 1,
    offsetY: 0,
    frame: 20,
  },
  creditLimit: {
    src: assetUrl("./assets/figma/credit-limit.svg"),
    width: 21,
    height: 15,
    offsetX: 0,
    offsetY: 0,
  },
  digitalWallet: {
    src: assetUrl("./assets/figma/digital-wallet.svg"),
    width: 16.5,
    height: 20,
    offsetX: 0.25,
    offsetY: 0,
  },
  redeemBonus: {
    src: assetUrl("./assets/figma/redeem-bonus.svg"),
    width: 18,
    height: 17,
    offsetX: 0,
    offsetY: -0.5,
  },
  travelPlan: {
    src: assetUrl("./assets/figma/travel-plan.svg"),
    width: 18.5,
    height: 17.5,
    offsetX: -0.3,
    offsetY: -1.25,
  },
  insurance: {
    src: assetUrl("./assets/figma/insurance.svg"),
    width: 15,
    height: 18.325,
    offsetX: 0,
    offsetY: -0.24,
  },
  addCardholder: {
    src: assetUrl("./assets/figma/add-cardholder.svg"),
    width: 20,
    height: 15,
    offsetX: 0,
    offsetY: -0.5,
  },
  dispute: {
    src: assetUrl("./assets/figma/dispute.svg"),
    width: 17.914,
    height: 17.566,
    offsetX: -0.04,
    offsetY: 0.22,
  },
  viewPin: {
    src: assetUrl("./assets/figma/view-pin.svg"),
    width: 20.799,
    height: 13.343,
    offsetX: 0,
    offsetY: 0,
  },
  viewCard: {
    src: assetUrl("./assets/figma/view-card.svg"),
    width: 18,
    height: 13,
    offsetX: 0,
    offsetY: 0.5,
  },
  temporaryBlock: {
    src: assetUrl("./assets/figma/temporary-block.svg"),
    width: 15,
    height: 18,
    offsetX: 0,
    offsetY: 0,
  },
  reportLost: {
    src: assetUrl("./assets/figma/report-lost.svg"),
    width: 19,
    height: 19,
    offsetX: 0,
    offsetY: 0,
  },
  changePin: {
    src: assetUrl("./assets/figma/change-pin.svg"),
    width: 13,
    height: 13,
    offsetX: 0,
    offsetY: 0,
  },
  replaceCard: {
    src: assetUrl("./assets/figma/replace-card.svg"),
    width: 15,
    height: 17,
    offsetX: 0,
    offsetY: 0,
  },
  detailInfoCards: {
    src: assetUrl("./assets/figma/detail-info-cards.svg"),
    width: 16,
    height: 20,
    offsetX: 0,
    offsetY: 0,
  },
  detailInfoLoans: {
    src: assetUrl("./assets/figma/detail-info-loans.svg"),
    width: 16,
    height: 20,
    offsetX: 0,
    offsetY: 0,
  },
  detailInfoInsurance: {
    src: assetUrl("./assets/figma/detail-info-insurance.svg"),
    width: 16,
    height: 20,
    offsetX: 0,
    offsetY: 0,
  },
  loanProduct: {
    src: assetUrl("./assets/figma/loan-product.svg"),
    width: 13.066,
    height: 17,
    offsetX: 0,
    offsetY: -0.5,
  },
  insuranceProduct: {
    src: assetUrl("./assets/figma/insurance-product.svg"),
    width: 15,
    height: 18.325,
    offsetX: 0,
    offsetY: -0.24,
  },
  insuranceCardSmall: {
    src: assetUrl("./assets/figma/insurance-card-small.svg"),
    width: 16,
    height: 20.284,
    offsetX: 0,
    offsetY: 0,
  },
  insuranceTravelSmall: {
    src: assetUrl("./assets/figma/insurance-travel-small.svg"),
    width: 17,
    height: 20.409,
    offsetX: 0,
    offsetY: 0,
  },
  insuranceSecuritySmall: {
    src: assetUrl("./assets/figma/insurance-security-small.svg"),
    width: 17,
    height: 20.364,
    offsetX: 0,
    offsetY: 0,
  },
  loanTopup: {
    src: assetUrl("./assets/figma/loan-topup.svg"),
    width: 20,
    height: 14,
    offsetX: 0,
    offsetY: 0,
  },
  loanNewWindow: {
    src: assetUrl("./assets/figma/loan-new-window.svg"),
    width: 16,
    height: 16,
    offsetX: 0,
    offsetY: 0,
    frame: 24,
  },
  loanRepayment: {
    src: assetUrl("./assets/figma/loan-repayment.svg"),
    width: 14.5,
    height: 13,
    offsetX: -0.25,
    offsetY: -0.5,
  },
  loanPaymentFree: {
    src: assetUrl("./assets/figma/loan-payment-free.svg"),
    width: 19,
    height: 20,
    offsetX: 0,
    offsetY: -0.5,
  },
  loanBankgiro: {
    src: assetUrl("./assets/figma/loan-bankgiro.svg"),
    width: 18,
    height: 17.83,
    offsetX: 0,
    offsetY: 0.09,
  },
  loanAgreementPdf: {
    src: assetUrl("./assets/figma/loan-agreement-pdf.svg"),
    width: 15,
    height: 19,
    offsetX: -0.5,
    offsetY: -0.5,
  },
  entercardLogo: assetUrl("./assets/figma/entercard-logo.svg"),
  swedbankCardArt: assetUrl("./assets/figma/swedbank-card-art.png"),
  swedbankLoginBg: assetUrl("./assets/figma/swedbank-login-bg.jpg"),
  swedbankLoginAccount: {
    src: "https://www.figma.com/api/mcp/asset/a9f2fb16-b000-462d-9bc2-05e9d5cdc9e5",
    width: 38,
    height: 38,
    offsetX: 0,
    offsetY: 0,
    frame: 48,
  },
  swedbankBankId: {
    src: "https://www.figma.com/api/mcp/asset/348f04de-7473-4e68-81af-476b798e34e8",
    width: 18,
    height: 18,
    offsetX: 0,
    offsetY: 0,
    frame: 24,
  },
  swedbankBankIdQr: {
    src: "https://www.figma.com/api/mcp/asset/fa776c80-c4b3-46f4-a888-66474995019f",
    width: 15.552,
    height: 15.552,
    offsetX: 3.75,
    offsetY: -4.5,
    frame: 24,
  },
  swedbankToggleBg:
    "https://www.figma.com/api/mcp/asset/6c757f0d-4243-4337-85ba-083ea12b7b23",
  swedbankChevron: {
    src: "https://www.figma.com/api/mcp/asset/7c999850-f68f-4251-bd83-b1f6773541df",
    width: 6,
    height: 11,
    offsetX: 0.5,
    offsetY: 0,
    frame: 20,
  },
  swedbankHelp: {
    src: "https://www.figma.com/api/mcp/asset/a8975135-5c4c-4d94-b00a-3ff7f0e95800",
    width: 19,
    height: 19,
    offsetX: 0,
    offsetY: 0,
    frame: 24,
  },
  swedbankAccessibility: {
    src: "https://www.figma.com/api/mcp/asset/fb34f905-271a-4eed-8e0d-dcabf8adb40b",
    width: 19,
    height: 19,
    offsetX: 0,
    offsetY: 0,
    frame: 24,
  },
  swedbankNewWindow: {
    src: "https://www.figma.com/api/mcp/asset/8b4ca046-736a-4a8c-b9b2-5593ec25d436",
    width: 16,
    height: 16,
    offsetX: 0,
    offsetY: 0,
    frame: 24,
  },
};

const commonAgreementBody =
  "You can withdraw from this agreement within 14 days. We will process your request after submission.";

const commonInformationRows = [
  {
    title: "No set-up fee",
    body: "The set-up fee will be waived.",
  },
  {
    title: "Right to withdraw",
    body: "You confirm that you are exercising your right of withdrawal within 14 days of the agreement.",
  },
  {
    title: "Remaining balance",
    body: "Any outstanding balance must still be paid. If it isn’t repaid within 30 days, the agreement will remain active.",
  },
];

const successBodyParagraphs = [
  "Your request has been successfully submitted. We will review it and contact you with an update.",
  "Please note that if the balance is not repaid within the specified period, the agreement will remain active despite this request.",
  "For further assistance, please contact customer service.",
];

const minasidorUrl = "https://minasidor.remember.se/se/remember/";
const swedbankUrl = "https://online.swedbank.se/app/ib/";
const customerServiceLabel = "Call +46 xx-xxx xx xx";
const customerServiceTel = "tel:+46";

const portals = {
  remember: {
    label: "re:member",
    defaultScreen: "home",
  },
  swedbank: {
    label: "Swedbank",
    defaultScreen: "swedbank-login",
  },
};

const cardStartSections = [
  {
    title: "Agreement",
    rows: [
      {
        kind: "large",
        icon: assets.agreement,
        label: "Withdraw from agreement",
        sublabel: "Available until April 3, 2026",
        trailingIcon: assets.chevron,
        action: "open-agreement",
      },
    ],
  },
  {
    title: "Card services",
    rows: [
      { icon: assets.creditLimit, label: "Increase credit limit" },
      { icon: assets.digitalWallet, label: "Digital wallets" },
      { icon: assets.redeemBonus, label: "Redeem bonus", value: "150,00 kr" },
      { icon: assets.travelPlan, label: "Add travel plan" },
      { icon: assets.insurance, label: "Manage insurance plans" },
      { icon: assets.addCardholder, label: "Add extra cardholder" },
      { icon: assets.dispute, label: "Dispute transaction" },
    ],
  },
  {
    title: "Card details",
    rows: [
      { icon: assets.viewPin, label: "View PIN" },
      { icon: assets.viewCard, label: "View card details" },
    ],
  },
  {
    title: "Card controls",
    rows: [
      { icon: assets.temporaryBlock, label: "Temporary block card" },
      { icon: assets.reportLost, label: "Report lost or stolen card" },
      { icon: assets.changePin, label: "Change PIN & replace card" },
      { icon: assets.replaceCard, label: "Replace damaged card" },
    ],
  },
];

const loanStartSections = [
  {
    rows: [
      {
        kind: "large",
        icon: assets.agreement,
        label: "Withdraw from agreement",
        sublabel: "Available until April 3, 2026",
        trailingIcon: assets.chevron,
        action: "open-agreement",
      },
      {
        icon: assets.loanTopup,
        label: "Top up loan",
        trailingIcon: assets.loanNewWindow,
      },
      {
        icon: assets.loanRepayment,
        label: "Repayment plan",
      },
      {
        icon: assets.loanPaymentFree,
        label: "Payment-free month",
      },
      {
        icon: assets.loanBankgiro,
        label: "View Bankgiro / OCR",
      },
      {
        icon: assets.insurance,
        label: "Insurance plan",
      },
      {
        icon: assets.loanAgreementPdf,
        label: "Show agreement",
      },
    ],
  },
];

const entryScreens = {
  "entry-card": {
    label: "Manage my card",
    title: "Manage my card",
    defaultState: "single-cards",
    summary: {
      title: "re:member more",
      meta: "**** 1234 • Maria Svensson",
      art: assets.cardArt,
    },
    sections: cardStartSections,
  },
  "entry-loan": {
    label: "Manage my loan",
    title: "Manage my loan",
    defaultState: "single-loans",
    sections: loanStartSections,
  },
};

const agreementScreens = {
  "single-cards": {
    group: "Single Products",
    label: "Cards",
    mode: "single",
    title: "Withdraw from agreement",
    body: commonAgreementBody,
    productTitle: "re:member more",
    productMeta: "**** 1234",
    productArt: assets.cardsDetailArt,
    infoIcon: assets.detailInfoCards,
    informationRows: commonInformationRows,
  },
  "single-loans": {
    group: "Single Products",
    label: "Loans",
    mode: "single",
    title: "Withdraw from agreement",
    body: commonAgreementBody,
    productTitle: "re:member loan",
    productMeta: "300, 000 kr",
    productIcon: assets.loanProduct,
    infoIcon: assets.detailInfoLoans,
    informationRows: commonInformationRows,
  },
  "single-insurance": {
    group: "Single Products",
    label: "Insurance",
    mode: "single",
    title: "Withdraw from agreement",
    body: commonAgreementBody,
    productTitle: "Betalningsskydd Plus",
    productMeta: "re:member more",
    productIcon: assets.insuranceProduct,
    infoIcon: assets.detailInfoInsurance,
    informationRows: commonInformationRows,
  },
  "multiple-cards": {
    group: "Multiple Products",
    label: "Cards",
    mode: "multiple",
    title: "Withdraw from agreement",
    body: commonAgreementBody,
    subtitle: "Select your product before submitting.",
    infoIcon: assets.detailInfoCards,
    informationRows: commonInformationRows,
    products: [
      {
        id: "card",
        title: "re:member more",
        meta: "**** 1234",
        productArt: assets.cardsDetailArt,
      },
      {
        id: "insurance",
        title: "Betalningsskydd Plus",
        meta: "re:member more",
        productIcon: assets.insuranceCardSmall,
      },
    ],
  },
  "multiple-loans": {
    group: "Multiple Products",
    label: "Loans",
    mode: "multiple",
    title: "Withdraw from agreement",
    body: commonAgreementBody,
    subtitle: "Select your product before submitting.",
    infoIcon: assets.detailInfoLoans,
    informationRows: commonInformationRows,
    products: [
      {
        id: "loan",
        title: "re:member loan",
        meta: "300, 000 kr",
        productIcon: assets.loanProduct,
      },
      {
        id: "insurance",
        title: "Låneskydd Plus",
        meta: "re:member loan",
        productIcon: assets.insuranceCardSmall,
      },
    ],
  },
  "multiple-insurance": {
    group: "Multiple Products",
    label: "Insurance",
    mode: "multiple",
    title: "Withdraw from agreement",
    body: commonAgreementBody,
    subtitle: "Select your product before submitting.",
    infoIcon: assets.detailInfoInsurance,
    informationRows: commonInformationRows,
    products: [
      {
        id: "payment-protection",
        title: "Betalningsskydd Plus",
        meta: "re:member more",
        productIcon: assets.insuranceCardSmall,
      },
      {
        id: "travel-insurance",
        title: "Insurance 2",
        meta: "re:member more",
        productIcon: assets.insuranceTravelSmall,
      },
      {
        id: "safety-package",
        title: "Insurance 3",
        meta: "re:member more",
        productIcon: assets.insuranceSecuritySmall,
      },
    ],
  },
};

const rememberNavGroups = [
  {
    title: "Entry points",
    entryKeys: ["entry-card", "entry-loan"],
  },
  {
    title: "Single Products",
    stateKeys: ["single-cards", "single-loans", "single-insurance"],
  },
  {
    title: "Multiple Products",
    stateKeys: ["multiple-cards", "multiple-loans", "multiple-insurance"],
  },
  {
    title: "Success Sheets",
    successKeys: ["app", "web"],
  },
  {
    title: "Submitted states",
    submittedKeys: ["request-received"],
  },
];

const swedbankPreviewScreens = {
  "swedbank-login": { label: "Login" },
  "swedbank-detail": { label: "Withdraw from agreement" },
  "swedbank-review": { label: "Review" },
  "swedbank-success": { label: "Success popup" },
  "swedbank-submitted": { label: "Request received" },
};

const successSheets = {
  app: {
    label: "From app",
    primaryActionLabel: "Go to Minasidor",
    primaryActionExternal: true,
  },
  web: {
    label: "From web",
    primaryActionLabel: null,
    primaryActionExternal: false,
  },
};

const submittedScreens = {
  "request-received": {
    label: "Request received",
  },
};

const prototypeState = {
  currentPortal: "remember",
  currentEntryPoint: "entry-card",
  currentState: "single-cards",
  currentScreen: "home",
  modalTransition: "idle",
  resetDetailScroll: false,
  reviewSnapshot: null,
  activeSuccessVariant: "app",
  callSheetOpen: false,
  selections: {
    "multiple-cards": {
      card: false,
      insurance: false,
    },
    "multiple-loans": {
      loan: false,
      insurance: false,
    },
    "multiple-insurance": {
      "payment-protection": false,
      "travel-insurance": false,
      "safety-package": false,
    },
  },
};

function renderIcon(icon, className = "service-row__icon") {
  const frame = icon.frame || 24;
  const style = [
    `--icon-frame:${frame}px`,
    `--icon-width:${icon.width}px`,
    `--icon-height:${icon.height}px`,
    `--icon-offset-x:${icon.offsetX || 0}px`,
    `--icon-offset-y:${icon.offsetY || 0}px`,
  ].join(";");

  return `
    <span class="${className}" style="${style}">
      <img class="${className}-image" src="${icon.src}" alt="" />
    </span>
  `;
}

function sectionId(title) {
  return `section-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function getCurrentScreenConfig() {
  return agreementScreens[prototypeState.currentState];
}

function getCurrentEntryConfig() {
  return entryScreens[prototypeState.currentEntryPoint];
}

function getCurrentPortalConfig() {
  return portals[prototypeState.currentPortal];
}

function getPrototypeNavGroups() {
  if (prototypeState.currentPortal === "swedbank") {
    return [
      {
        title: "Swedbank flow",
        previewKeys: [
          "swedbank-login",
          "swedbank-detail",
          "swedbank-review",
          "swedbank-success",
          "swedbank-submitted",
        ],
      },
    ];
  }

  return rememberNavGroups;
}

function getSelectionsForState(stateKey) {
  return prototypeState.selections[stateKey] || {};
}

function getSelectedProducts(stateKey = prototypeState.currentState) {
  const config = agreementScreens[stateKey];

  if (!config) {
    return [];
  }

  if (!isMultipleScreen(config)) {
    return [
      {
        id: stateKey,
        title: config.productTitle,
        meta: config.productMeta,
      },
    ];
  }

  const selections = getSelectionsForState(stateKey);
  return config.products
    .filter((product) => Boolean(selections[product.id]))
    .map((product) => ({
      id: product.id,
      title: product.title,
      meta: product.meta,
    }));
}

function isMultipleScreen(config) {
  return config.mode === "multiple";
}

function hasSelectedProducts(stateKey) {
  return getSelectedProducts(stateKey).length > 0;
}

function renderHomeSummary(summary) {
  if (!summary) {
    return "";
  }

  return `
    <section class="card-summary" aria-label="Selected card">
      <img class="card-summary__art" src="${summary.art}" alt="" />
      <div class="card-summary__content">
        <p class="card-summary__title">${summary.title}</p>
        <p class="card-summary__meta">${summary.meta}</p>
      </div>
    </section>
  `;
}

function renderRow(row) {
  const rowClass = row.kind === "large" ? "service-row service-row--large" : "service-row";
  const supportingText = row.sublabel
    ? `<p class="service-row__supporting">${row.sublabel}</p>`
    : "";
  const trailingValue = row.value
    ? `<span class="service-row__value">${row.value}</span>`
    : "";
  const trailingIcon = row.trailingIcon
    ? renderIcon(row.trailingIcon, "service-row__chevron")
    : "";
  const trailing = trailingValue || trailingIcon
    ? `<span class="service-row__trailing">${trailingValue}${trailingIcon}</span>`
    : `<span class="service-row__trailing" aria-hidden="true"></span>`;
  const action = row.action ? `data-action="${row.action}"` : "";

  return `
    <button class="${rowClass}" type="button" ${action}>
      <span class="service-row__leading">
        ${renderIcon(row.icon)}
      </span>
      <span class="service-row__text">
        <span class="service-row__label">${row.label}</span>
        ${supportingText}
      </span>
      ${trailing}
    </button>
  `;
}

function renderSection(section) {
  const rows = section.rows.map(renderRow).join("");
  const headingMarkup = section.title
    ? `<h2 class="service-section__title" id="${sectionId(section.title)}">${section.title}</h2>`
    : "";
  const labelledBy = section.title ? ` aria-labelledby="${sectionId(section.title)}"` : "";
  return `
    <section class="service-section"${labelledBy}>
      ${headingMarkup}
      <div class="service-section__rows">${rows}</div>
    </section>
  `;
}

function renderStartScreen() {
  const entryConfig = getCurrentEntryConfig();
  return `
    <div class="sheet-surface sheet-surface--home">
      <header class="sheet-header">
        <div class="sheet-header__content">
          <div class="sheet-header__actions">
            <button class="close-button" type="button" aria-label="Close">
              <span class="close-button__icon"></span>
            </button>
          </div>
          <h1 class="sheet-header__title">${entryConfig.title}</h1>
        </div>
      </header>
      <div class="sheet-body">
        ${renderHomeSummary(entryConfig.summary)}
        ${entryConfig.sections.map(renderSection).join("")}
      </div>
    </div>
  `;
}

function renderProductMedia(config, artClassName, iconClassName) {
  if (config.productArt) {
    return `<img class="${artClassName}" src="${config.productArt}" alt="" />`;
  }

  const style = [
    `width:${config.productIcon.width}px`,
    `height:${config.productIcon.height}px`,
    `--icon-offset-x:${config.productIcon.offsetX || 0}px`,
    `--icon-offset-y:${config.productIcon.offsetY || 0}px`,
  ].join(";");

  return `
    <span class="${iconClassName}">
      <img class="${iconClassName}-image" src="${config.productIcon.src}" alt="" style="${style}" />
    </span>
  `;
}

function renderDetailInfoRow(icon, row) {
  const lines = row.body
    .split("\n")
    .map((line) => `<span class="detail-info__body-line">${line}</span>`)
    .join("");

  return `
    <div class="detail-info__row">
      <div class="detail-info__leading">${renderIcon(icon, "detail-info__icon")}</div>
      <div class="detail-info__content">
        <div class="detail-info__title">${row.title}</div>
        <div class="detail-info__body">${lines}</div>
      </div>
    </div>
  `;
}

function renderSingleProductRow(config) {
  return `
    <div class="detail-product">
      <div class="detail-product__leading">
        ${renderProductMedia(config, "detail-product__art", "detail-product__icon")}
      </div>
      <div class="detail-product__content">
        <div class="detail-product__name">${config.productTitle}</div>
        <div class="detail-product__meta">${config.productMeta}</div>
      </div>
    </div>
  `;
}

function renderSelectionCheckbox(selected) {
  if (!selected) {
    return `<span class="selection-checkbox" aria-hidden="true"></span>`;
  }

  return `
    <span class="selection-checkbox selection-checkbox--selected" aria-hidden="true">
      <img class="selection-checkbox__image" src="${assets.checkboxCheck}" alt="" />
    </span>
  `;
}

function renderSelectableProductRow(stateKey, product) {
  const selected = Boolean(getSelectionsForState(stateKey)[product.id]);
  const rowClass = selected
    ? "detail-selectable-row detail-selectable-row--selected"
    : "detail-selectable-row";
  const leadingClass = product.productArt
    ? "detail-selectable-row__leading detail-selectable-row__leading--art"
    : "detail-selectable-row__leading detail-selectable-row__leading--icon";

  return `
    <button
      class="${rowClass}"
      type="button"
      data-toggle-product
      data-state-key="${stateKey}"
      data-product-id="${product.id}"
      aria-pressed="${selected}"
    >
      <div class="${leadingClass}">
        ${renderProductMedia(product, "detail-selectable-row__art", "detail-selectable-row__icon")}
      </div>
      <div class="detail-selectable-row__content">
        <div class="detail-selectable-row__title">${product.title}</div>
        <div class="detail-selectable-row__meta">${product.meta}</div>
      </div>
      <div class="detail-selectable-row__trailing">
        ${renderSelectionCheckbox(selected)}
      </div>
    </button>
  `;
}

function renderDetailShell(config, bodyMarkup, footerMarkup) {
  const transitionClass =
    prototypeState.modalTransition === "dismissing"
      ? " modal-sheet--closing"
      : prototypeState.modalTransition === "opening"
        ? " modal-sheet--opening"
        : "";
  const backdropClass =
    prototypeState.modalTransition === "opening"
      ? "modal-backdrop modal-backdrop--opening"
      : "modal-backdrop";

  return `
    <div class="modal-layer">
      <button class="${backdropClass}" type="button" aria-label="Close modal" data-action="back-home"></button>
      <section class="sheet-surface sheet-surface--detail modal-sheet${transitionClass}" aria-label="${config.label} agreement flow">
        <header class="detail-header">
          <div class="detail-header__handle" aria-hidden="true"></div>
          <div class="detail-header__actions">
            <button class="close-button" type="button" aria-label="Close" data-action="back-home">
              <span class="close-button__icon"></span>
            </button>
          </div>
          <div class="detail-header__content">
            <h1 class="detail-header__title">${config.title}</h1>
          </div>
        </header>
        <div class="detail-sheet__scroll">
          <section class="detail-intro">
            <p class="detail-intro__body">${config.body}</p>
          </section>
          ${bodyMarkup}
        </div>
        ${footerMarkup}
      </section>
    </div>
  `;
}

function renderSingleDetailScreen(config) {
  const bodyMarkup = `
    <section class="detail-block">
      <h2 class="detail-block__title">Product details</h2>
      <p class="detail-block__subtitle">Review your product before submitting.</p>
      ${renderSingleProductRow(config)}
      <div class="detail-divider" aria-hidden="true"></div>
    </section>
    <section class="detail-block detail-block--information">
      <h2 class="detail-block__title">What happens next</h2>
      <div class="detail-info">
        ${config.informationRows.map((row) => renderDetailInfoRow(config.infoIcon, row)).join("")}
      </div>
    </section>
  `;

  const footerMarkup = `
    <footer class="detail-footer">
      <button class="detail-footer__button" type="button" data-action="open-review">Next</button>
    </footer>
  `;

  return renderDetailShell(config, bodyMarkup, footerMarkup);
}

function renderMultipleDetailScreen(config) {
  const nextEnabled = hasSelectedProducts(prototypeState.currentState);
  const bodyMarkup = `
    <section class="detail-block detail-block--selection">
      <h2 class="detail-block__title">Product details</h2>
      <p class="detail-block__subtitle">${config.subtitle}</p>
      <div class="detail-selectable-list">
        ${config.products.map((product) => renderSelectableProductRow(prototypeState.currentState, product)).join("")}
      </div>
    </section>
    <section class="detail-block detail-block--information">
      <h2 class="detail-block__title">What happens next</h2>
      <div class="detail-info">
        ${config.informationRows.map((row) => renderDetailInfoRow(config.infoIcon, row)).join("")}
      </div>
    </section>
  `;

  const footerClass = nextEnabled
    ? "detail-footer__button"
    : "detail-footer__button detail-footer__button--disabled";
  const footerMarkup = `
    <footer class="detail-footer">
      <button class="${footerClass}" type="button" ${nextEnabled ? 'data-action="open-review"' : "disabled"}>
        Next
      </button>
    </footer>
  `;

  return renderDetailShell(config, bodyMarkup, footerMarkup);
}

function renderDetailScreen() {
  const config = getCurrentScreenConfig();
  return isMultipleScreen(config)
    ? renderMultipleDetailScreen(config)
    : renderSingleDetailScreen(config);
}

function formatRequestTimestamp(date) {
  const datePart = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

  return `${datePart}, ${timePart}`;
}

function createReviewSnapshot() {
  if (prototypeState.currentPortal === "swedbank") {
    prototypeState.reviewSnapshot = {
      stateKey: "swedbank",
      products: [
        {
          id: "swedbank-card",
          title: "Swedbank Mastercard",
          meta: "**** 1234",
        },
      ],
      cardNumber: "**** 1234",
      requestTime: formatRequestTimestamp(new Date()),
      name: "Maria Svensson",
      confirmationLabel: "Via Swedbank\n(Messages)",
    };
    return;
  }

  const selectedProducts = getSelectedProducts();
  const hasCard = prototypeState.currentState === "single-cards"
    || (
      prototypeState.currentState === "multiple-cards"
      && selectedProducts.some((product) => product.id === "card")
    );

  prototypeState.reviewSnapshot = {
    stateKey: prototypeState.currentState,
    products: selectedProducts,
    cardNumber: hasCard ? "**** 1234" : null,
    requestTime: formatRequestTimestamp(new Date()),
    name: "Maria Svensson",
    confirmationLabel: "Via Minasidor\n(Messages)",
  };
}

function renderReviewTile(icon, label, value) {
  const valueMarkup = value.includes("\n")
    ? value.split("\n").map((line) => `<span class="review-tile__value-line">${line}</span>`).join("")
    : `<span class="review-tile__value-line">${value}</span>`;

  return `
    <article class="review-tile">
      <div class="review-tile__icon-wrap">
        <span class="review-tile__icon-frame">
          <img class="review-tile__icon" src="${icon.src}" alt="" style="width:${icon.width}px;height:${icon.height}px;" />
        </span>
      </div>
      <div class="review-tile__copy">
        <div class="review-tile__label">${label}</div>
        <div class="review-tile__value">${valueMarkup}</div>
      </div>
    </article>
  `;
}

function renderReviewRow(label, value, addDivider = true, allowWrap = false, variant = "") {
  const dividerClass = addDivider ? " review-row--divided" : "";
  const rowClass = variant ? ` review-row--${variant}` : "";
  const labelClass = variant
    ? `review-row__label review-row__label--${variant}`
    : "review-row__label";
  const valueClass = allowWrap
    ? `review-row__value review-row__value--wrap${variant ? ` review-row__value--${variant}` : ""}`
    : `review-row__value${variant ? ` review-row__value--${variant}` : ""}`;
  return `
    <div class="review-row${dividerClass}${rowClass}">
      <div class="${labelClass}">${label}</div>
      <div class="${valueClass}">${value}</div>
    </div>
  `;
}

function renderReviewScreen() {
  const snapshot = prototypeState.reviewSnapshot;
  const reviewRows = [
    ...snapshot.products.map((product) => ({
      label: "Product",
      value: product.title,
      allowWrap: false,
      variant: "product",
    })),
    ...(snapshot.cardNumber
      ? [{ label: "Card number", value: snapshot.cardNumber, allowWrap: false, variant: "" }]
      : []),
    { label: "Request time", value: snapshot.requestTime, allowWrap: false, variant: "timestamp" },
  ];
  const reviewRowsMarkup = reviewRows
    .map((row, index) =>
      renderReviewRow(
        row.label,
        row.value,
        index !== reviewRows.length - 1,
        row.allowWrap,
        row.variant,
      ))
    .join("");

  return `
    <div class="modal-layer">
      <button class="modal-backdrop" type="button" aria-label="Close modal" data-action="back-home"></button>
      <section class="sheet-surface sheet-surface--detail modal-sheet review-sheet" aria-label="Review your request">
        <header class="review-header">
          <div class="detail-header__handle" aria-hidden="true"></div>
          <div class="review-header__nav">
            <button class="nav-circle-button" type="button" aria-label="Back" data-action="back-detail">
              <span class="nav-circle-button__chevron nav-circle-button__chevron--left"></span>
            </button>
            <button class="close-button" type="button" aria-label="Close" data-action="back-home">
              <span class="close-button__icon"></span>
            </button>
          </div>
          <div class="review-header__content">
            <h1 class="review-header__title">Review your request</h1>
          </div>
        </header>
        <div class="detail-sheet__scroll detail-sheet__scroll--review">
          <section class="review-intro">
            <p class="review-header__body">Please review your details before submitting. Once submitted, we’ll start processing your request and send a confirmation to your Messages (Minasidor).</p>
          </section>
          <section class="review-tiles">
            ${renderReviewTile(assets.reviewAccount, "Name", snapshot.name)}
            ${renderReviewTile(assets.reviewMail, "Confirmation", snapshot.confirmationLabel)}
          </section>
          <section class="review-section">
            ${reviewRowsMarkup}
          </section>
        </div>
        <footer class="detail-footer review-footer">
          <button class="review-footer__button" type="button" data-action="open-success">Submit withdrawal request</button>
        </footer>
      </section>
    </div>
  `;
}

function renderSubmittedScreen() {
  const snapshot = prototypeState.reviewSnapshot;
  const reviewRows = [
    ...snapshot.products.map((product) => ({
      label: "Product",
      value: product.title,
      allowWrap: false,
      variant: "product",
    })),
    ...(snapshot.cardNumber
      ? [{ label: "Card number", value: snapshot.cardNumber, allowWrap: false, variant: "" }]
      : []),
    { label: "Request time", value: snapshot.requestTime, allowWrap: false, variant: "timestamp" },
  ];
  const reviewRowsMarkup = reviewRows
    .map((row, index) =>
      renderReviewRow(
        row.label,
        row.value,
        index !== reviewRows.length - 1,
        row.allowWrap,
        row.variant,
      ))
    .join("");
  const submittedBodyMarkup = successBodyParagraphs
    .map((paragraph) => `<p class="submitted-header__paragraph">${paragraph}</p>`)
    .join("");

  return `
    <div class="modal-layer">
      <button class="modal-backdrop" type="button" aria-label="Close modal" data-action="back-home"></button>
      <section class="sheet-surface sheet-surface--detail modal-sheet review-sheet submitted-sheet" aria-label="Request received">
        <header class="review-header submitted-header">
          <div class="detail-header__handle" aria-hidden="true"></div>
          <div class="review-header__nav">
            <button class="nav-circle-button" type="button" aria-label="Back" data-action="back-home">
              <span class="nav-circle-button__chevron nav-circle-button__chevron--left"></span>
            </button>
            <button class="close-button" type="button" aria-label="Close" data-action="back-home">
              <span class="close-button__icon"></span>
            </button>
          </div>
          <div class="review-header__content submitted-header__content">
            <h1 class="review-header__title">Request received</h1>
          </div>
        </header>
        <div class="detail-sheet__scroll detail-sheet__scroll--review">
          <section class="review-intro review-intro--submitted">
            <div class="review-header__body submitted-header__body">${submittedBodyMarkup}</div>
          </section>
          <section class="review-tiles">
            ${renderReviewTile(assets.reviewAccount, "Name", snapshot.name)}
            ${renderReviewTile(assets.reviewMail, "Confirmation", snapshot.confirmationLabel)}
          </section>
          <section class="review-section">
            ${reviewRowsMarkup}
          </section>
        </div>
        <footer class="detail-footer submitted-footer">
          ${renderSuccessButton("Go to Minasidor", "secondary", "success-primary", true)}
          ${renderSuccessButton("Contact customer service", "primary", "success-secondary")}
        </footer>
      </section>
    </div>
  `;
}

function renderSwedbankBrandHeader() {
  return `
    <header class="swedbank-brand-header">
      <div class="swedbank-brand-header__logo-wrap">
        <img class="swedbank-brand-header__logo" src="${assets.entercardLogo}" alt="Entercard" />
      </div>
      <div class="swedbank-brand-header__divider" aria-hidden="true"></div>
    </header>
  `;
}

function renderSwedbankCardArt() {
  return `<img class="swedbank-card-art" src="${assets.swedbankCardArt}" alt="" aria-hidden="true" />`;
}

function renderSwedbankLoginOption({
  label,
  icon,
  action,
  chevronIcon = assets.swedbankChevron,
}) {
  return `
    <button class="swedbank-login__option" type="button" data-action="${action}">
      <span class="swedbank-login__option-left">
        <span class="swedbank-login__bankid-icon-wrap">
          ${renderIcon(icon, "swedbank-login__bankid-icon")}
        </span>
        <span class="swedbank-login__option-label">${label}</span>
      </span>
      ${renderIcon(chevronIcon, "swedbank-login__chevron")}
    </button>
  `;
}

function renderSwedbankUtilityRow({ label, icon, action = "", external = false }) {
  const actionAttr = action ? ` data-action="${action}"` : "";
  const trailing = external
    ? renderIcon(assets.swedbankNewWindow, "swedbank-login__utility-trailing")
    : renderIcon(assets.swedbankChevron, "swedbank-login__utility-trailing");

  return `
    <button class="swedbank-login__utility"${actionAttr} type="button">
      <span class="swedbank-login__utility-left">
        ${renderIcon(icon, "swedbank-login__utility-icon")}
        <span class="swedbank-login__utility-label">${label}</span>
      </span>
      ${trailing}
    </button>
  `;
}

function renderSwedbankPrimaryButton(label, action) {
  return `
    <button class="swedbank-button swedbank-button--primary" type="button" data-action="${action}">
      ${label}
    </button>
  `;
}

function renderSwedbankSecondaryButton(label, action) {
  return `
    <button class="swedbank-button swedbank-button--secondary" type="button" data-action="${action}">
      ${label}
    </button>
  `;
}

function renderSwedbankLoginScreen() {
  return `
    <section class="swedbank-login" aria-label="Swedbank login">
      <div class="swedbank-login__bg">
        <img class="swedbank-login__bg-image" src="${assets.swedbankLoginBg}" alt="" />
      </div>
      <div class="swedbank-login__topbar">
        <img class="swedbank-login__logo" src="${assets.entercardLogo}" alt="Entercard" />
        <div class="swedbank-login__topbar-divider" aria-hidden="true"></div>
      </div>
      <div class="swedbank-login__card">
        <div class="swedbank-login__hero">
          <div class="swedbank-login__account">${renderIcon(assets.swedbankLoginAccount, "swedbank-login__account-icon")}</div>
          <h1 class="swedbank-login__title">Login</h1>
          <p class="swedbank-login__body">Log in with BankID to withdraw from your agreement</p>
        </div>
        <div class="swedbank-login__options">
          ${renderSwedbankLoginOption({
            label: "BankID med QR-kod",
            icon: assets.swedbankBankId,
            action: "open-swedbank-detail",
          })}
          ${renderSwedbankLoginOption({
            label: "BankID på denna enhet",
            icon: assets.swedbankBankId,
            action: "open-swedbank-detail",
          })}
        </div>
        <div class="swedbank-login__utilities">
          ${renderSwedbankUtilityRow({
            label: "Behöver du hjälp?",
            icon: assets.swedbankHelp,
          })}
          ${renderSwedbankUtilityRow({
            label: "Tillgänglighetsredogörelse",
            icon: assets.swedbankAccessibility,
            external: true,
          })}
        </div>
      </div>
    </section>
  `;
}

function renderSwedbankDetailScreen() {
  return `
    <section class="swedbank-screen" aria-label="Swedbank withdraw from agreement">
      ${renderSwedbankBrandHeader()}
      <div class="swedbank-screen__scroll">
        <section class="swedbank-screen__title-block">
          <h1 class="swedbank-screen__title">Withdraw from agreement</h1>
          <p class="swedbank-screen__body">${commonAgreementBody}</p>
        </section>
        <section class="swedbank-screen__section">
          <h2 class="swedbank-screen__section-title">Product details</h2>
          <p class="swedbank-screen__section-subtitle">Review your product before submitting.</p>
          <div class="swedbank-product-row">
            ${renderSwedbankCardArt()}
            <div class="swedbank-product-row__content">
              <div class="swedbank-product-row__title">Swedbank Mastercard</div>
              <div class="swedbank-product-row__meta">**** 1234</div>
            </div>
          </div>
        </section>
        <section class="swedbank-screen__section">
          <h2 class="swedbank-screen__section-title">What happens next</h2>
          <div class="detail-info detail-info--swedbank">
            ${commonInformationRows.map((row) => renderDetailInfoRow(assets.detailInfoCards, row)).join("")}
          </div>
        </section>
      </div>
      <footer class="swedbank-screen__footer">
        ${renderSwedbankPrimaryButton("Next", "open-swedbank-review")}
      </footer>
    </section>
  `;
}

function renderSwedbankReviewScreen() {
  const snapshot = prototypeState.reviewSnapshot;
  const reviewRowsMarkup = [
    renderReviewRow("Product", "Swedbank Mastercard", true, false, "product"),
    renderReviewRow("Card number", snapshot.cardNumber, true),
    renderReviewRow("Request time", snapshot.requestTime, false, false, "timestamp"),
  ].join("");

  return `
    <section class="swedbank-screen" aria-label="Swedbank review your request">
      ${renderSwedbankBrandHeader()}
      <div class="swedbank-screen__scroll">
        <section class="swedbank-screen__title-block">
          <h1 class="swedbank-screen__title">Review your request</h1>
          <p class="swedbank-screen__body">Please review your details before submitting. Once submitted, we’ll start processing your request and send a confirmation to your Messages (Minasidor).</p>
        </section>
        <section class="review-tiles review-tiles--swedbank">
          ${renderReviewTile(assets.reviewAccount, "Name", snapshot.name)}
          ${renderReviewTile(assets.reviewMail, "Confirmation", "Via Swedbank\n(Messages)")}
        </section>
        <section class="review-section review-section--swedbank">
          ${reviewRowsMarkup}
        </section>
      </div>
      <footer class="swedbank-screen__footer">
        <button class="review-footer__button" type="button" data-action="open-swedbank-success">Submit withdrawal request</button>
      </footer>
    </section>
  `;
}

function renderSwedbankSuccessScreen() {
  const successBodyMarkup = successBodyParagraphs
    .map((paragraph) => `<p class="success-sheet__body-paragraph">${paragraph}</p>`)
    .join("");

  return `
    <section class="swedbank-screen swedbank-screen--success" aria-label="Swedbank request received">
      <div class="success-sheet success-sheet--portal">
        <header class="success-sheet__top">
          <div class="success-sheet__actions">
            <button class="close-button" type="button" aria-label="Close" data-action="close-swedbank-success">
              <span class="close-button__icon"></span>
            </button>
          </div>
          <div class="success-sheet__spacer" aria-hidden="true"></div>
        </header>
        <div class="success-sheet__body">
          ${renderSuccessIllustration()}
          <h1 class="success-sheet__title">Request received</h1>
          <div class="success-sheet__body-copy">${successBodyMarkup}</div>
          <div class="success-sheet__buttons">
            ${renderSwedbankSecondaryButton("Contact Entercard", "swedbank-contact")}
            ${renderSwedbankPrimaryButton("Logout & return to Swedbank", "swedbank-logout")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderSwedbankSubmittedScreen() {
  const snapshot = prototypeState.reviewSnapshot;
  const reviewRowsMarkup = [
    renderReviewRow("Product", "Swedbank Mastercard", true, false, "product"),
    renderReviewRow("Card number", snapshot.cardNumber, true),
    renderReviewRow("Request time", snapshot.requestTime, false, false, "timestamp"),
  ].join("");
  const submittedBodyMarkup = successBodyParagraphs
    .map((paragraph) => `<p class="submitted-header__paragraph">${paragraph}</p>`)
    .join("");

  return `
    <section class="swedbank-screen" aria-label="Swedbank request received submitted">
      ${renderSwedbankBrandHeader()}
      <div class="swedbank-screen__scroll swedbank-screen__scroll--submitted">
        <section class="swedbank-screen__title-block swedbank-screen__title-block--submitted">
          <h1 class="swedbank-screen__title">Request received</h1>
          <div class="swedbank-screen__body swedbank-screen__body--stacked">${submittedBodyMarkup}</div>
        </section>
        <section class="review-tiles review-tiles--swedbank">
          ${renderReviewTile(assets.reviewAccount, "Name", snapshot.name)}
          ${renderReviewTile(assets.reviewMail, "Confirmation", "Via Swedbank\n(Messages)")}
        </section>
        <section class="review-section review-section--swedbank">
          ${reviewRowsMarkup}
        </section>
      </div>
      <footer class="swedbank-screen__footer swedbank-screen__footer--stacked">
        ${renderSwedbankSecondaryButton("Contact Entercard", "swedbank-contact")}
        ${renderSwedbankPrimaryButton("Logout & return to Swedbank", "swedbank-logout")}
      </footer>
    </section>
  `;
}

function renderSuccessIllustration() {
  return `
    <div class="success-illustration" aria-hidden="true">
      <svg class="success-illustration__svg" width="180" height="140" viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_success_illustration)">
          <path d="M43.4736 47.6149C43.4736 45.4058 45.2645 43.6149 47.4736 43.6149H130.3C132.51 43.6149 134.3 45.4058 134.3 47.6149V58.1242C134.3 75.7973 119.974 90.1242 102.3 90.1242H75.4736C57.8005 90.1242 43.4736 75.7973 43.4736 58.1242V47.6149Z" stroke="#161513" stroke-width="2"/>
          <path d="M121.396 29.9876C124.709 29.9876 127.396 32.6739 127.396 35.9876V39.1643C127.396 40.2411 126.964 41.2735 126.197 42.0296C123.493 44.6958 121.971 48.3348 121.971 52.1321V69.3274C121.971 87.8453 106.959 102.857 88.4414 102.857C69.9235 102.857 54.9121 87.8453 54.9121 69.3274V52.1321C54.9121 48.3348 53.3894 44.6958 50.6855 42.0296C49.9189 41.2735 49.4873 40.2411 49.4873 39.1643V35.9876C49.4873 32.6739 52.1736 29.9876 55.4873 29.9876H121.396Z" stroke="white" stroke-width="4"/>
          <path d="M51.4873 35.9876C51.4873 33.7784 53.2782 31.9876 55.4873 31.9876H121.395C123.605 31.9876 125.395 33.7784 125.395 35.9876V39.1647C125.395 39.7063 125.178 40.2253 124.793 40.6056C121.708 43.6477 119.971 47.7995 119.971 52.1321V69.3275C119.971 86.7409 105.855 100.857 88.4414 100.857C71.028 100.857 56.9118 86.7409 56.9118 69.3275V52.1321C56.9118 47.7995 55.175 43.6477 52.09 40.6056C51.7044 40.2253 51.4873 39.7063 51.4873 39.1647V35.9876Z" fill="white" stroke="#161513" stroke-width="2"/>
          <mask id="mask0_success_illustration" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="50" y="30" width="77" height="72">
            <path d="M51.4873 35.9876C51.4873 33.7784 53.2782 31.9876 55.4873 31.9876H121.395C123.605 31.9876 125.395 33.7784 125.395 35.9876V39.1647C125.395 39.7063 125.178 40.2253 124.793 40.6055C121.708 43.6477 119.971 47.7995 119.971 52.1321V69.3275C119.971 86.7408 105.855 100.857 88.4414 100.857C71.028 100.857 56.9118 86.7408 56.9118 69.3275V52.1321C56.9118 47.7995 55.175 43.6477 52.09 40.6055C51.7044 40.2253 51.4873 39.7063 51.4873 39.1647V35.9876Z" fill="white" stroke="#161513" stroke-width="2"/>
          </mask>
          <g mask="url(#mask0_success_illustration)">
            <path d="M111.738 23.9876C119.281 23.9876 125.396 30.1022 125.396 37.6448C125.395 41.3 123.93 44.8029 121.327 47.3694L120.301 48.3821C120.09 48.5899 119.971 48.8733 119.971 49.1692V69.3274C119.971 91.159 102.273 108.857 80.4414 108.857C58.6098 108.857 40.9121 91.159 40.9121 69.3274V49.1692C40.9121 48.8733 40.7927 48.5899 40.582 48.3821L39.5547 47.3694C37.0334 44.883 35.5795 41.5177 35.4912 37.9866L35.4873 37.6448L35.4922 37.2923C35.6791 29.9125 41.7197 23.9876 49.1445 23.9876H111.738Z" stroke="#222222" stroke-opacity="0.08" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <rect x="81.7637" y="100.857" width="14.2473" height="21.4658" fill="white" stroke="#161513" stroke-width="2"/>
          <mask id="mask1_success_illustration" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="80" y="99" width="18" height="25">
            <rect x="81.7637" y="100.857" width="14.2473" height="21.4658" fill="white" stroke="#161513" stroke-width="2"/>
          </mask>
          <g mask="url(#mask1_success_illustration)">
            <rect x="68.7637" y="92.8572" width="30.2473" height="37.4658" stroke="#222222" stroke-opacity="0.08" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <path d="M65.7354 124.957C65.7354 120.538 69.3171 116.957 73.7354 116.957H104.039C108.458 116.957 112.039 120.538 112.039 124.957V130.373H65.7354V124.957Z" fill="white" stroke="#161513" stroke-width="2"/>
          <mask id="mask2_success_illustration" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="64" y="115" width="50" height="17">
            <path d="M65.7344 124.957C65.7344 120.538 69.3161 116.957 73.7344 116.957H104.038C108.457 116.957 112.038 120.538 112.038 124.957V130.373H65.7344V124.957Z" fill="white" stroke="#161513" stroke-width="2"/>
          </mask>
          <g mask="url(#mask2_success_illustration)">
            <path d="M97.0381 108.957C105.875 108.957 113.038 116.12 113.038 124.957V130.373C113.038 134.791 109.456 138.373 105.038 138.373H58.7344C54.3161 138.373 50.7344 134.791 50.7344 130.373V116.957C50.7344 112.538 54.3161 108.957 58.7344 108.957H97.0381Z" stroke="#222222" stroke-opacity="0.08" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <ellipse cx="88.887" cy="65.0807" rx="14.2473" ry="14.3106" fill="white" stroke="#ED7102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <mask id="mask3_success_illustration" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="73" y="49" width="32" height="32">
            <ellipse cx="88.887" cy="65.0807" rx="14.2473" ry="14.3106" fill="white" stroke="#ED7102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </mask>
          <g mask="url(#mask3_success_illustration)">
            <path d="M82.8867 42.7702C95.2069 42.7702 105.135 52.7924 105.135 65.0807C105.135 77.3691 95.2069 87.3913 82.8867 87.3913C70.5666 87.3911 60.6396 77.369 60.6396 65.0807C60.6397 52.7925 70.5666 42.7703 82.8867 42.7702Z" stroke="#ED7102" stroke-opacity="0.08" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <path d="M84.2128 64.4099L87.552 67.764L94.2305 61.0559" stroke="#ED7102" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M59.4633 130.373H40.8018M117.381 130.373H138.752" stroke="#161513" stroke-width="2" stroke-linecap="round"/>
          <path d="M110.989 17.1485C111.292 11.3335 118.856 9.29776 122.013 14.1814L124.23 17.6108C124.701 18.3385 125.587 18.6786 126.425 18.4532L130.388 17.3865C135.995 15.8778 140.246 22.4236 136.598 26.9489L133.995 30.1766C133.452 30.8501 133.402 31.7966 133.871 32.5219L136.113 35.9881C139.267 40.8678 134.331 46.9492 128.912 44.8597L125.119 43.3977C124.309 43.0855 123.389 43.3328 122.843 44.0102L120.286 47.1812C116.633 51.7125 109.331 48.9249 109.634 43.1145L109.85 38.9869C109.895 38.1233 109.38 37.3289 108.575 37.0182L104.714 35.53C99.3016 33.4432 99.7253 25.639 105.332 24.1299L109.295 23.0635C110.132 22.8381 110.731 22.0983 110.776 21.2318L110.989 17.1485Z" stroke="white" stroke-width="4"/>
          <path d="M112.985 17.249C113.187 13.3723 118.23 12.0152 120.335 15.2709L122.552 18.6999C123.493 20.1556 125.265 20.8363 126.94 20.3855L130.903 19.3189C134.641 18.3128 137.476 22.6768 135.043 25.6937L132.441 28.9219C131.355 30.269 131.255 32.1604 132.192 33.6111L134.434 37.0778C136.537 40.3309 133.246 44.3852 129.633 42.9922L125.841 41.5298C124.22 40.9051 122.381 41.4002 121.288 42.7549L118.732 45.9262C116.296 48.9472 111.428 47.0887 111.63 43.2151L111.846 39.0872C111.936 37.3598 110.907 35.7721 109.296 35.1509L105.436 33.6623C101.827 32.2711 102.109 27.0684 105.848 26.0623L109.811 24.9957C111.486 24.5449 112.682 23.0653 112.772 21.3319L112.985 17.249Z" fill="white" stroke="#161513" stroke-width="2"/>
          <mask id="mask4_success_illustration" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="101" y="12" width="36" height="37">
            <path d="M112.985 17.249C113.187 13.3723 118.23 12.0152 120.335 15.2709L122.552 18.6999C123.493 20.1556 125.265 20.8363 126.94 20.3855L130.903 19.3189C134.641 18.3128 137.476 22.6768 135.043 25.6937L132.441 28.9219C131.355 30.269 131.255 32.1604 132.192 33.6111L134.434 37.0778C136.537 40.3309 133.246 44.3852 129.633 42.9922L125.841 41.5298C124.22 40.9051 122.381 41.4002 121.288 42.7549L118.732 45.9262C116.296 48.9472 111.428 47.0887 111.63 43.2151L111.846 39.0872C111.936 37.3598 110.907 35.7721 109.296 35.1509L105.436 33.6623C101.827 32.2711 102.109 27.0684 105.848 26.0623L109.811 24.9957C111.486 24.5449 112.682 23.0653 112.772 21.3319L112.985 17.249Z" fill="white" stroke="#161513" stroke-width="2"/>
          </mask>
          <g mask="url(#mask4_success_illustration)">
            <path d="M97.0793 18.1343C99.1496 7.68856 112.628 4.0613 119.621 12.0675C130.243 10.7795 137.708 22.5677 132.301 31.6754C136.687 41.2441 128.095 52.2774 117.626 49.8741C109.757 57.2118 96.8238 51.9723 95.8591 41.4832C86.6433 36.3113 87.2405 22.3538 97.0793 18.1343Z" stroke="#222222" stroke-opacity="0.08" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <path d="M51.9043 92.814C54.3842 91.5685 57.3324 91.697 59.6943 93.1538C62.0562 94.6107 63.495 97.1874 63.4951 99.9624V103.541C63.4951 106.566 61.7882 109.331 59.085 110.689L55.5234 112.478C53.0436 113.723 50.0953 113.595 47.7334 112.138C45.3715 110.681 43.9328 108.105 43.9326 105.33V101.751C43.9326 98.7264 45.6395 95.9597 48.3428 94.6021L51.9043 92.814ZM51.9326 101.751V105.33L55.4951 103.541V99.9624L51.9326 101.751ZM134.52 92.0308C136.43 90.9224 138.878 91.573 139.986 93.4839C141.095 95.3948 140.444 97.8423 138.533 98.9507L133.19 102.049C131.279 103.158 128.832 102.507 127.724 100.596C126.615 98.6853 127.266 96.2378 129.177 95.1294L134.52 92.0308ZM99.1348 41.3579C99.1348 39.1488 100.926 37.3579 103.135 37.3579C105.344 37.3582 107.135 39.1489 107.135 41.3579C107.135 43.6748 106.467 46.041 104.685 47.8257C102.902 49.6109 100.539 50.2769 98.2363 50.2769C96.0274 50.2766 94.2363 48.4859 94.2363 46.2769C94.2365 44.068 96.0275 42.2771 98.2363 42.2769C98.6997 42.2769 98.9264 42.2035 99.0156 42.1636C99.0568 42.073 99.1348 41.8396 99.1348 41.3579ZM72.4131 26.6245C74.6221 26.6245 76.4128 28.4156 76.4131 30.6245V35.563C76.413 36.9933 75.6496 38.3148 74.4102 39.0288C73.9943 39.2684 73.5457 39.4251 73.0869 39.5034C72.5541 41.0866 71.0596 42.227 69.2969 42.2271C67.0877 42.2271 65.2969 40.4362 65.2969 38.2271V33.7554C65.2969 32.3251 66.0605 31.0036 67.2998 30.2896C67.6758 30.073 68.0785 29.9222 68.4912 29.8374C68.857 28.0056 70.4737 26.6247 72.4131 26.6245ZM23 31.9663C23.0002 27.0756 26.9606 23.0474 31.8975 23.0474C34.1066 23.0474 35.8975 24.8382 35.8975 27.0474C35.8974 29.2565 34.1066 31.0474 31.8975 31.0474C31.4249 31.0474 31.0002 31.4477 31 31.9663C31 34.1755 29.2091 35.9663 27 35.9663C24.7909 35.9663 23 34.1755 23 31.9663ZM100.275 2.10597C103.021 2.10606 105.575 3.51391 107.04 5.83546L110.125 10.7232C111.681 13.1877 111.773 16.3036 110.366 18.856C108.959 21.4083 106.275 22.9937 103.36 22.9937H97.1895C94.275 22.9935 91.5907 21.4082 90.1836 18.856C88.7766 16.3037 88.8691 13.1877 90.4248 10.7232L93.5098 5.83546L93.6504 5.62062C95.1352 3.42718 97.6155 2.10597 100.275 2.10597ZM97.1895 14.9937H103.36L100.275 10.106L97.1895 14.9937Z" fill="white"/>
          <path d="M131.184 98.5897L136.527 95.4907M69.2968 38.2275V33.7554L72.4134 35.5628V30.625M27 31.9666C27 29.2618 29.1927 27.0474 31.8975 27.0474M98.2367 46.2772C101.353 46.2772 103.134 44.5093 103.134 41.3579M51.9329 105.329V101.752L55.4947 99.9627V103.54L51.9329 105.329ZM103.36 14.9938L100.275 10.106L97.1898 14.9938H103.36Z" stroke="#161513" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="0.1 0.1"/>
        </g>
        <defs>
          <clipPath id="clip0_success_illustration">
            <rect width="180" height="140" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </div>
  `;
}

function renderSuccessButton(label, variant, action, showExternalIcon = false) {
  const iconMarkup = showExternalIcon
    ? `
        <span class="success-action__icon" aria-hidden="true">
          <span class="success-action__icon-box"></span>
          <span class="success-action__icon-arrow"></span>
        </span>
      `
    : "";

  return `
    <button class="success-action success-action--${variant}" type="button" data-action="${action}">
      ${iconMarkup}
      <span class="success-action__label">${label}</span>
    </button>
  `;
}

function renderCallSheet() {
  if (!prototypeState.callSheetOpen) {
    return "";
  }

  return `
    <div class="modal-layer modal-layer--call">
      <button class="modal-backdrop modal-backdrop--success" type="button" aria-label="Close call sheet" data-action="close-call-sheet"></button>
      <section class="call-sheet" aria-label="Call customer service">
        <button class="call-sheet__action" type="button" data-action="confirm-call-service">
          ${customerServiceLabel}
        </button>
        <button class="call-sheet__cancel" type="button" data-action="close-call-sheet">
          Cancel
        </button>
      </section>
    </div>
  `;
}

function renderSuccessScreen() {
  const config = successSheets[prototypeState.activeSuccessVariant];
  const primaryAction = config.primaryActionLabel
    ? renderSuccessButton(
        config.primaryActionLabel,
        "secondary",
        "success-primary",
        config.primaryActionExternal,
      )
    : "";
  const successBodyMarkup = successBodyParagraphs
    .map((paragraph) => `<p class="success-sheet__body-paragraph">${paragraph}</p>`)
    .join("");

  return `
    <div class="modal-layer modal-layer--success">
      <button class="modal-backdrop modal-backdrop--success" type="button" aria-label="Close modal" data-action="close-success"></button>
      <section class="success-sheet" aria-label="Request received">
        <header class="success-sheet__top">
          <div class="success-sheet__actions">
            <button class="close-button" type="button" aria-label="Close" data-action="close-success">
              <span class="close-button__icon"></span>
            </button>
          </div>
          <div class="success-sheet__spacer" aria-hidden="true"></div>
        </header>
        <div class="success-sheet__body">
          ${renderSuccessIllustration()}
          <h1 class="success-sheet__title">Request received</h1>
          <div class="success-sheet__body-copy">${successBodyMarkup}</div>
          <div class="success-sheet__buttons">
            ${primaryAction}
            ${renderSuccessButton("Contact customer service", "secondary", "success-secondary")}
            ${renderSuccessButton("Close", "primary", "close-success")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderPrototypeControls() {
  const portalButtons = Object.entries(portals)
    .map(([portalKey, config]) => {
      const active = prototypeState.currentPortal === portalKey ? " prototype-nav__button--active" : "";
      return `
        <button class="prototype-nav__button${active}" type="button" data-portal="${portalKey}">
          ${config.label}
        </button>
      `;
    })
    .join("");
  const groupsMarkup = getPrototypeNavGroups()
    .map((group) => {
      const stateButtons = (group.stateKeys || [])
        .map((stateKey) => {
          const config = agreementScreens[stateKey];
          const active = prototypeState.currentState === stateKey ? " prototype-nav__button--active" : "";

          return `
            <button class="prototype-nav__button${active}" type="button" data-state="${stateKey}">
              ${config.label}
            </button>
          `;
        })
        .join("");
      const entryButtons = (group.entryKeys || [])
        .map((entryKey) => {
          const config = entryScreens[entryKey];
          const active = prototypeState.currentEntryPoint === entryKey
            ? " prototype-nav__button--active"
            : "";

          return `
            <button class="prototype-nav__button${active}" type="button" data-entry-point="${entryKey}">
              ${config.label}
            </button>
          `;
        })
        .join("");
      const successButtons = (group.successKeys || [])
        .map((successKey) => {
          const config = successSheets[successKey];
          const active = prototypeState.activeSuccessVariant === successKey
            ? " prototype-nav__button--active"
            : "";

          return `
            <button class="prototype-nav__button${active}" type="button" data-success-variant="${successKey}">
              ${config.label}
            </button>
          `;
        })
        .join("");
      const submittedButtons = (group.submittedKeys || [])
        .map((submittedKey) => {
          const config = submittedScreens[submittedKey];
          const active = prototypeState.currentScreen === "submitted"
            ? " prototype-nav__button--active"
            : "";

          return `
            <button class="prototype-nav__button${active}" type="button" data-submitted-screen="${submittedKey}">
              ${config.label}
            </button>
          `;
        })
        .join("");
      const previewButtons = (group.previewKeys || [])
        .map((previewKey) => {
          const config = swedbankPreviewScreens[previewKey];
          const active = prototypeState.currentScreen === previewKey ? " prototype-nav__button--active" : "";

          return `
            <button class="prototype-nav__button${active}" type="button" data-preview-screen="${previewKey}">
              ${config.label}
            </button>
          `;
        })
        .join("");
      const buttons = `${entryButtons}${stateButtons}${successButtons}${submittedButtons}${previewButtons}`;

      return `
        <section class="prototype-nav__group">
          <h2 class="prototype-nav__group-title">${group.title}</h2>
          <div class="prototype-nav__buttons">${buttons}</div>
        </section>
      `;
    })
    .join("");

      return `
    <aside class="prototype-nav" aria-label="Prototype states">
      <div class="prototype-nav__panel">
        <div class="prototype-nav__eyebrow">Prototype states</div>
        <section class="prototype-nav__group">
          <h2 class="prototype-nav__group-title">Portal</h2>
          <div class="prototype-nav__buttons">${portalButtons}</div>
        </section>
        ${groupsMarkup}
      </div>
    </aside>
  `;
}

function renderPhoneContent() {
  if (prototypeState.currentPortal === "swedbank") {
    switch (prototypeState.currentScreen) {
      case "swedbank-login":
        return renderSwedbankLoginScreen();
      case "swedbank-detail":
        return renderSwedbankDetailScreen();
      case "swedbank-review":
        return renderSwedbankReviewScreen();
      case "swedbank-success":
        return renderSwedbankSuccessScreen();
      case "swedbank-submitted":
        return renderSwedbankSubmittedScreen();
      default:
        return renderSwedbankLoginScreen();
    }
  }

  let homeClass = " phone-screen phone-screen--active";

  if (prototypeState.currentScreen !== "home") {
    homeClass =
      prototypeState.modalTransition === "opening"
        ? " phone-screen phone-screen--underlay-animating"
        : " phone-screen phone-screen--underlay";
  }

  return `
    <div class="${homeClass}">
      ${renderStartScreen()}
    </div>
    ${prototypeState.currentScreen === "detail" ? renderDetailScreen() : ""}
    ${prototypeState.currentScreen === "review" ? renderReviewScreen() : ""}
    ${prototypeState.currentScreen === "success" ? `${renderReviewScreen()}${renderSuccessScreen()}` : ""}
    ${prototypeState.currentScreen === "submitted" ? renderSubmittedScreen() : ""}
  `;
}

function renderApp() {
  const viewportClass =
    prototypeState.currentPortal === "remember" && prototypeState.currentScreen !== "home"
      ? "phone-frame__viewport phone-frame__viewport--modal-open"
      : "phone-frame__viewport";

  return `
    <main class="app-shell">
      ${renderPrototypeControls()}
      <div class="device-shell" aria-label="iPhone 16 frame">
        <div class="device-chrome" aria-hidden="true">
          <div class="device-statusbar">
            <span class="device-statusbar__time" data-live-time>9:41</span>
            <span class="device-statusbar__island"></span>
            <span class="device-statusbar__right">
              <span class="device-statusbar__signal" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span class="device-statusbar__wifi" aria-hidden="true"></span>
              <span class="device-statusbar__battery" aria-hidden="true">
                <span class="device-statusbar__battery-cap"></span>
                <span class="device-statusbar__battery-level"></span>
              </span>
            </span>
          </div>
        </div>
        <div class="device-shell__screen">
          <div class="phone-frame">
            <div class="${viewportClass}">
              ${renderPhoneContent()}
              ${renderCallSheet()}
            </div>
            <footer class="home-indicator" aria-hidden="true">
              <span class="home-indicator__bar"></span>
            </footer>
          </div>
        </div>
      </div>
    </main>
  `;
}

function toggleMultipleProduct(stateKey, productId) {
  const currentSelections = {
    ...getSelectionsForState(stateKey),
  };

  if (stateKey === "multiple-cards") {
    if (productId === "card") {
      const nextValue = !currentSelections.card;
      currentSelections.card = nextValue;
      if (nextValue) {
        currentSelections.insurance = true;
      }
    } else if (productId === "insurance") {
      currentSelections.insurance = currentSelections.card
        ? true
        : !currentSelections.insurance;
    }
  } else if (stateKey === "multiple-loans") {
    if (productId === "loan") {
      const nextValue = !currentSelections.loan;
      currentSelections.loan = nextValue;
      if (nextValue) {
        currentSelections.insurance = true;
      }
    } else if (productId === "insurance") {
      currentSelections.insurance = currentSelections.loan
        ? true
        : !currentSelections.insurance;
    }
  } else {
    currentSelections[productId] = !currentSelections[productId];
  }

  prototypeState.selections[stateKey] = currentSelections;
}

function formatTime(date) {
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(date);
}

function syncLiveTime() {
  const time = formatTime(new Date());
  document.querySelectorAll("[data-live-time]").forEach((node) => {
    node.textContent = time;
  });
}

function bindPrototypeEvents() {
  document.querySelectorAll("[data-portal]").forEach((button) => {
    button.addEventListener("click", () => {
      const portalKey = button.dataset.portal;
      prototypeState.currentPortal = portalKey;
      prototypeState.modalTransition = "idle";
      prototypeState.resetDetailScroll = false;
      prototypeState.reviewSnapshot = null;
      prototypeState.currentScreen = portals[portalKey].defaultScreen;
      render();
    });
  });

  document.querySelectorAll("[data-entry-point]").forEach((button) => {
    button.addEventListener("click", () => {
      const entryKey = button.dataset.entryPoint;
      const entryConfig = entryScreens[entryKey];
      prototypeState.currentEntryPoint = entryKey;
      prototypeState.currentState = entryConfig.defaultState;
      prototypeState.currentScreen = "home";
      prototypeState.modalTransition = "idle";
      prototypeState.resetDetailScroll = false;
      prototypeState.reviewSnapshot = null;
      render();
    });
  });

  document.querySelectorAll("[data-state]").forEach((button) => {
    button.addEventListener("click", () => {
      const wasHome = prototypeState.currentScreen === "home";
      prototypeState.currentState = button.dataset.state;
      prototypeState.activeSuccessVariant = prototypeState.activeSuccessVariant || "app";
      prototypeState.modalTransition = wasHome ? "opening" : "open";
      prototypeState.currentScreen = "detail";
      prototypeState.resetDetailScroll = true;
      prototypeState.reviewSnapshot = null;
      render();
    });
  });

  document.querySelectorAll("[data-success-variant]").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.activeSuccessVariant = button.dataset.successVariant;
      createReviewSnapshot();
      prototypeState.currentScreen = "success";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-preview-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      if (
        button.dataset.previewScreen === "swedbank-review"
        || button.dataset.previewScreen === "swedbank-success"
        || button.dataset.previewScreen === "swedbank-submitted"
      ) {
        createReviewSnapshot();
      }
      prototypeState.currentScreen = button.dataset.previewScreen;
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-submitted-screen]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!prototypeState.reviewSnapshot) {
        createReviewSnapshot();
      }
      prototypeState.currentScreen = "submitted";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='open-agreement']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.currentState = getCurrentEntryConfig().defaultState;
      prototypeState.modalTransition = "opening";
      prototypeState.currentScreen = "detail";
      prototypeState.resetDetailScroll = true;
      prototypeState.reviewSnapshot = null;
      render();
    });
  });

  document.querySelectorAll("[data-action='back-home']").forEach((button) => {
    button.addEventListener("click", () => {
      if (prototypeState.currentPortal === "swedbank") {
        prototypeState.currentScreen = "swedbank-login";
        prototypeState.modalTransition = "idle";
        prototypeState.resetDetailScroll = false;
        prototypeState.reviewSnapshot = null;
        render();
        return;
      }
      prototypeState.modalTransition = "dismissing";
      render();
      window.setTimeout(() => {
        prototypeState.currentScreen = "home";
        prototypeState.modalTransition = "idle";
        prototypeState.resetDetailScroll = false;
        prototypeState.reviewSnapshot = null;
        render();
      }, 380);
    });
  });

  document.querySelectorAll("[data-action='open-review']").forEach((button) => {
    button.addEventListener("click", () => {
      createReviewSnapshot();
      prototypeState.currentScreen = "review";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='open-success']").forEach((button) => {
    button.addEventListener("click", () => {
      if (!prototypeState.reviewSnapshot) {
        createReviewSnapshot();
      }
      prototypeState.currentScreen = "success";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='back-detail']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.currentScreen = "detail";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='close-success']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.currentScreen = "submitted";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='open-swedbank-detail']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.currentScreen = "swedbank-detail";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='open-swedbank-review']").forEach((button) => {
    button.addEventListener("click", () => {
      createReviewSnapshot();
      prototypeState.currentScreen = "swedbank-review";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='open-swedbank-success']").forEach((button) => {
    button.addEventListener("click", () => {
      if (!prototypeState.reviewSnapshot) {
        createReviewSnapshot();
      }
      prototypeState.currentScreen = "swedbank-success";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='close-swedbank-success']").forEach((button) => {
    button.addEventListener("click", () => {
      if (!prototypeState.reviewSnapshot) {
        createReviewSnapshot();
      }
      prototypeState.currentScreen = "swedbank-submitted";
      prototypeState.resetDetailScroll = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='swedbank-logout']").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(swedbankUrl, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-action='success-primary']").forEach((button) => {
    button.addEventListener("click", () => {
      window.open(minasidorUrl, "_blank", "noopener,noreferrer");
    });
  });

  document.querySelectorAll("[data-action='success-secondary'], [data-action='swedbank-contact']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.callSheetOpen = true;
      render();
    });
  });

  document.querySelectorAll("[data-action='close-call-sheet']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.callSheetOpen = false;
      render();
    });
  });

  document.querySelectorAll("[data-action='confirm-call-service']").forEach((button) => {
    button.addEventListener("click", () => {
      prototypeState.callSheetOpen = false;
      render();
      window.location.href = customerServiceTel;
    });
  });

  document.querySelectorAll("[data-toggle-product]").forEach((button) => {
    button.addEventListener("click", () => {
      toggleMultipleProduct(button.dataset.stateKey, button.dataset.productId);
      render();
    });
  });
}

function render() {
  document.querySelector("#app").innerHTML = renderApp();
  syncLiveTime();
  bindPrototypeEvents();

  const viewport = document.querySelector(".phone-frame__viewport");
  if (viewport && prototypeState.currentScreen === "home") {
    viewport.scrollTop = 0;
  }

  const detailScroll = document.querySelector(".detail-sheet__scroll");
  if (detailScroll && prototypeState.resetDetailScroll) {
    detailScroll.scrollTop = 0;
    prototypeState.resetDetailScroll = false;
  }

  if (prototypeState.modalTransition === "opening") {
    window.setTimeout(() => {
      prototypeState.modalTransition = "open";
    }, 380);
  }
}

render();
setInterval(syncLiveTime, 1000 * 15);
