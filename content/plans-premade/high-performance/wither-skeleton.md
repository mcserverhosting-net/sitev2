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

    - name: "Storage"
      type: "readonly"
      value: "100 GiB"

    - name: "nodemodel"
      type: "readonly"
      value: "m1"

    - name: "database"
      type: "readonly"
      value: 1

    - name: "snapshots"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "readonly"
      value: 10
      
    - name: "servertype"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 42.00
---