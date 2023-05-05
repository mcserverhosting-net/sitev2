---
title: "Wither Skeleton"
draft: false
category: "High Performance"
weight: 5

product:
  id: "wither-skeleton"
  name: "Wither Skeleton"
  price: "42.00"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "10 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "100 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m3"

    - name: "DATABASES"
      type: "readonly"
      value: 12

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 35
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 50
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 42.00
---